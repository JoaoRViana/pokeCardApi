import { Request, Router, Response } from 'express';
import DeckController from '../controller/deckController';

const deckRouter = Router();

const deckController = new DeckController();

deckRouter.get('/:userId',(req:Request,res:Response)=> deckController.getUserDecks(req,res))

export default deckRouter