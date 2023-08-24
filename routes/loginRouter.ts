import { Request, Router, Response } from 'express';
import LoginController from '../controller/loginController';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', (req: Request, res: Response) => loginController.login(req, res));

export default loginRouter;