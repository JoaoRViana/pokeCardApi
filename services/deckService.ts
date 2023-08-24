import DeckModel from "../models/DeckModel";
import CardInDeckModel from "../models/CardInDeckModel";
import CardModel from "../models/CardModel";
import { SERVER_RETURN } from "../types";

export default class DeckService{
 private deckModel = DeckModel
 private cardModel = CardModel
 private cardInDeckModel = CardInDeckModel
 public async getUserDecks(userId:number):Promise<SERVER_RETURN>{
  const userDecks = await this.deckModel.findAll({where:{userId}})
  const cards = await Promise.all(userDecks.map(async (e)=>{
    const cards = await this.cardInDeckModel.findAll({where:{deckId:e.id}})
    const attCards=  await Promise.all(cards.map(async(e)=>(this.cardModel.findOne({where:{id:e.cardId},attributes: { exclude: ['user_id','userId'] }}))))
    return {deck:e,cards:attCards}
  }))
  if(userDecks.length <0){
    return{type:404,message:'There are no decks for this user'}
  }
  return {type:null,message:cards}
 }
 public async removeDeck(userId:number,deckId:number):Promise<SERVER_RETURN>{
    const deck = await this.deckModel.findOne({where:{userId,id:deckId}})
    if(!deck){
      return {type:404,message:'it was not possible'}
    }
    await this.deckModel.destroy({where:{userId,id:deckId}})
    return await this.getUserDecks(userId)
  }
  public async addDeck(userId:number,name:string):Promise<SERVER_RETURN>{
    const newDeckData = {
      name,
      userId,
    }
    const newDeck = await this.deckModel.build(newDeckData)
    await newDeck.save()
    return {type:null,message:newDeck}  }

  public async getDeck(userId:number,deckId:number):Promise<SERVER_RETURN>{
    const deck = await this.deckModel.findOne({where:{userId,id:deckId}})
    if(!deck){
      return {type:404,message:'deck not found'}
    }
    return {type:null,message:deck}
  }
}