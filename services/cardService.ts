import CardModel from '../models/CardModel'
import {SERVER_RETURN} from '../types/index'

export default class CardService {
  private cardModel = CardModel
  public async getUserCards(userId:number):Promise<SERVER_RETURN>{
    const userCards = await this.cardModel.findAll({where:{userId}})
    if(!userId){
      return {type:404,message:'invalid user'}
    }
    return{type:200,message:userCards}
  }
}