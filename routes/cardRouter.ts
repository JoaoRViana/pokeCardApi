import { Request, Router, Response } from 'express';
import CardController from '../controller/cardController';

const cardRouter = Router();

const cardController = new CardController();

cardRouter.get('/:userId',(req: Request, res: Response) => cardController.getUserCards(req, res))
cardRouter.delete('/:userId/:cardId',(req: Request, res: Response) => cardController.removeCard(req, res))

export default cardRouter;