import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService{
   async signUp(dto:AuthDto){
        return "signup";
    }
    signIn(){
        return "sign-in";
    }
}