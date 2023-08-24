import { Router } from 'express';
import loginRouter from './loginRouter';
import cardRouter from './cardRouter';

const router = Router();

router.use('/login',loginRouter)
router.use('/card',cardRouter)

export default router;