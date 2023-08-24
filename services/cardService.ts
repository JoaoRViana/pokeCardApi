import CardModel from '../models/CardModel'
import {SERVER_RETURN} from '../types/index'

export default class CardService {
  private cardModel = CardModel
  public async getUserCards(userId:number):Promise<SERVER_RETURN>{
    const userCards = await this.cardModel.findAll({where:{userId},attributes: { exclude: ['user_id','id','userId'] }})
    if(!userId || userCards.length <1){
      return {type:404,message:'dont have cards'}
    }
    return{type:null,message:userCards}
  }
}