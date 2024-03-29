import UserModel from '../models/UserModel'
import {SERVER_RETURN} from '../types/index'

export default class LoginService {
  private usermodel = UserModel;
  public async login(username:string,password:string):Promise<SERVER_RETURN>{
    const user = await this.usermodel.findOne({where:{userName:username,password}})
    if(user){
      return {type:null,message:{id:user.id,userName:user.userName}}
    }else{
      return {type:404,message:'userName or password invalid'}
    }
  }
  public async register(username:string,password:string):Promise<SERVER_RETURN>{
    const user = await this.usermodel.findOne({where:{userName:username}});
    if(!user && username.length >3 && password.length >3){
      const newUser = await this.usermodel.create({userName:username,password},)
      return{type:null,message:{id:newUser.id,userName:newUser.userName}}
    }
    return {type:401,message:'username invalid'}
  }
}