import { Request, Router, Response } from 'express';
import DeckController from '../controller/deckController';

const deckRouter = Router();

const deckController = new DeckController();

deckRouter.get('/:userId/:deckId',(req:Request,res:Response)=> deckController.getDeck(req,res))
deckRouter.get('/:userId',(req:Request,res:Response)=> deckController.getUserDecks(req,res))
deckRouter.delete('/:userId/:deckId',(req:Request,res:Response)=> deckController.deleteUserDeck(req,res))
deckRouter.post('/:userId',(req:Request,res:Response)=> deckController.addDeck(req,res))



export default deckRouter