import { Request, Response } from 'express';
import CardService from '../services/cardService';

export default class CardController {
  constructor(private cardService:any = new CardService()) { }
  public async getUserCards(req:Request,res:Response){
    const {userId} =req.params
    const {type,message} = await this.cardService.getUserCards(+userId)
    if(type){
      return res.status(type).json({message})
    }
    return res.status(200).json(message)
  }
}