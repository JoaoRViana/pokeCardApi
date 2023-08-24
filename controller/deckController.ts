import { Request, Response } from 'express';
import DeckService from '../services/deckService';

export default class DeckController{
  constructor(private deckService = new DeckService()) {}
  public async getUserDecks(req:Request,res:Response){
    const {userId} = req.params;
    const {type,message} = await this.deckService.getUserDecks(+userId)
    if(type){
      return res.status(type).json({message})
    }
    return res.status(200).json(message)
  }
}