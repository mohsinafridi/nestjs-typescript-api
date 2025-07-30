import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}

    @Get('test')
    getTest(){
        return "Get Test";
    }

     @Post('signup')
    signup(@Body() dto:AuthDto) {
        
        console.log({
            dto
        })
        return this.authService.signUp();
    }

    @Post('signin')
    singin(){
        this.authService.signIn();
    }
}