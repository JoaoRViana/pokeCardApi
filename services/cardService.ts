import CardModel from '../models/CardModel'
import CardInDeckModel from '../models/CardInDeckModel'
import DeckModel from '../models/DeckModel'
import {SERVER_RETURN,TCard} from '../types/index'

export default class CardService {
  private cardModel = CardModel
  private cardInDeckModel = CardInDeckModel
  private deckModel = DeckModel

  public async getUserCards(userId:number):Promise<SERVER_RETURN>{
    const userCards = await this.cardModel.findAll({where:{userId},attributes: { exclude: ['user_id','userId'] }})
    if(!userId || userCards.length <1){
      return {type:404,message:'dont have cards'}
    }
    return{type:null,message:userCards}
  }

  public async removeCard(userId:number,cardId:number):Promise<SERVER_RETURN>{
      const card = await this.cardModel.findOne({where:{userId,id:cardId}})
      if(!card){
        return{type:403,message:'it is not possible to remove this card'}
      }
      await this.cardModel.destroy({where:{userId,id:cardId}});
      const decks = await this.cardInDeckModel.findAll({where:{cardId}});
      await Promise.all(decks.map(async(e)=> await this.deckModel.destroy({where:{id:e.deckId}})))
      await this.cardInDeckModel.destroy({where:{cardId}});
      
      return await this.getUserCards(userId)
  }
  
  public async addCard(userId:number,card:TCard):Promise<SERVER_RETURN>{
    if(!card.name || !card.attack || !card.hp || !card.spriteOnBoard || !card.spriteOnCard || !card.types){
      return {type:400,message:'missing values or invalid values'}
    }
    const newCardData = {
      ...card,
      userId,
    }
    const newCard = this.cardModel.build(newCardData)
    await newCard.save()
    return {type:null,message:newCard}
  }
}