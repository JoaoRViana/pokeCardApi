import UserModel from '../models/UserModel'
import {SERVER_RETURN} from '../types/index'

export default class LoginService {
  private usermodel = UserModel;
  public async login(username:string,password:string):Promise<SERVER_RETURN>{
    const user = await this.usermodel.findOne({where:{userName:username,password}})
    if(user){
      return {type:null,message:{id:user.id}}
    }else{
      return {type:404,message:'userName or password invalid'}
    }
  }
  public async register(username:string,password:string):Promise<SERVER_RETURN>{
    const user = await this.usermodel.findOne({where:{userName:username}});
    if(!user){
      const newUser = await this.usermodel.create({userName:username,password})
      return{type:null,message:newUser}
    }
    return {type:401,message:'username invalid'}
  }
}