import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService:any = new LoginService()) { }
  public async login(req:Request,res:Response){
    const {userName,password} = req.body;
    const {type,message} = await this.loginService.login(userName,password);
    if(type){
      return res.status(type).json({message})
    }
    return res.status(200).json(message)
  }
  public async register(req:Request,res:Response){
    const {userName,password} = req.body;
    const {type,message} = await this.loginService.register(userName,password);
    if(type){
      return res.status(type).json({message})
    }
    return res.status(201).json(message)
  }
}