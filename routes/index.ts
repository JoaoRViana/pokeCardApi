import { Router } from 'express';
import loginRouter from './loginRouter';
import cardRouter from './cardRouter';
import deckRouter from './deckRouter';

const router = Router();

router.use('/login',loginRouter)
router.use('/card',cardRouter)
router.use('/deck',deckRouter)

export default router;