import DeckModel from "../models/DeckModel";
import CardInDeckModel from "../models/CardInDeckModel";
import CardModel from "../models/CardModel";
import { SERVER_RETURN,TCard } from "../types";

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
    await this.cardInDeckModel.destroy({where:{deckId}})
    return await this.getUserDecks(userId)
  }
  public async addDeck(userId:number,name:string,cards:TCard[]):Promise<SERVER_RETURN>{
    const newDeckData = {
      name,
      userId,
    }
    if(cards.length !==6){
      return{type:400,message:'there are missing cards or there are extra cards'}
    }
    const newDeck = this.deckModel.build(newDeckData)
    await newDeck.save();
   await Promise.all(cards.map(async (e) => {
      const card = this.cardInDeckModel.build({ cardId: e.id, deckId: newDeck.id });
      await card.save();
    }))
    return await this.getDeck(userId,newDeck.id)
  }

  public async getDeck(userId:number,deckId:number):Promise<SERVER_RETURN>{
   const userDeck = await this.deckModel.findOne({where:{userId,id:deckId}})
    const cards = await this.cardInDeckModel.findAll({where:{deckId}})
    const attCards=  await Promise.all(cards.map(async(e)=>(this.cardModel.findOne({where:{id:e.cardId},attributes: { exclude: ['user_id','userId'] }}))))
  if(!userDeck){
    return{type:404,message:'There are no decks for this user'}
  }
  const result = {deck:userDeck,cards:attCards}
  return {type:null,message:result}
 }
}