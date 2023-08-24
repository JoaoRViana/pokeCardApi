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
  public async deleteUserDeck(req:Request,res:Response){
    const{userId,deckId} = req.params;
    const {type,message} = await this.deckService.removeDeck(+userId,+deckId)
    if(type){
      return res.status(type).json({message})
    }
    return res.status(200).json(message)
  }
  public async addDeck(req:Request,res:Response){
    const{userId}=req.params;
    const{name}= req.body;
    const {type,message} = await this.deckService.addDeck(+userId,name)
    if(type){
      return res.status(type).json({message})
    }
    return res.status(200).json(message)
  }
  public async getDeck(req:Request,res:Response){
    const{userId,deckId}=req.params;
    const {type,message} = await this.deckService.getDeck(+userId,+deckId)
    if(type){
      return res.status(type).json({message})
    }
    return res.status(200).json(message)
  }
}