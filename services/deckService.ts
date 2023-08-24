import DeckModel from "../models/DeckModel";
import { SERVER_RETURN } from "../types";

export default class DeckService{
 private deckModel = DeckModel
 public async getUserDecks(userId:number):Promise<SERVER_RETURN>{
  const userDecks = await this.deckModel.findAll({where:{userId}})
  if(userDecks.length <0){
    return{type:404,message:'There are no decks for this user'}
  }
  return {type:null,message:userDecks}
 }
}