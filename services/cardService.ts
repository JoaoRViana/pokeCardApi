import CardModel from '../models/CardModel'
import {SERVER_RETURN,TCard} from '../types/index'

export default class CardService {
  private cardModel = CardModel
  public async getUserCards(userId:number):Promise<SERVER_RETURN>{
    const userCards = await this.cardModel.findAll({where:{userId},attributes: { exclude: ['user_id','userId'] }})
    if(!userId || userCards.length <1){
      return {type:404,message:'dont have cards'}
    }
    return{type:null,message:userCards}
  }
  public async removeCard(userId:number,cardId:number):Promise<SERVER_RETURN>{
    try {
      await this.cardModel.destroy({where:{userId,id:cardId}});
      const newCards = await this.cardModel.findAll({where:{userId},attributes: { exclude: ['user_id','userId'] }})
      return {type:null,message:newCards}
    } catch (error) {
      return{type:403,message:'it is not possible to remove this card'}
    }
  }
  public async addCard(userId:number,card:TCard):Promise<SERVER_RETURN>{
    const newCardData = {
      ...card,
      userId,
    }
    const newCard = await this.cardModel.build(newCardData)
    await newCard.save()
    return {type:null,message:newCard}
  }
}