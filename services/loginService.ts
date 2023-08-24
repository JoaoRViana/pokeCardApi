import UserModel from '../models/UserModel'

export default class LoginService {
  private usermodel = UserModel;
  public async login(username:string,password:string){
    const user = await this.usermodel.findOne({where:{userName:username,password}})
    if(user){
      return {type:null,message:user}
    }else{
      return {type:404,message:'user not found'}
    }
  }
}