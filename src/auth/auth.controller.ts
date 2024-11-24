import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { UserFirstAccessDto } from 'src/user/dto/user-first-access.dto';
import { Public } from './auth.guard';

@Public()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body('email') email: string, @Body('passcode') passcode: string) {
        return this.authService.login(email, passcode);
    }

    @Post('get-passcode')
    getPasscode(@Body('email') email: string) {
        return this.authService.getPasscode(email);
    }

    @Post('first-access')
    firstAccess(
        @Body('user') user: UserFirstAccessDto,
        @Body('company') company: CreateCompanyDto
    ) {
        return this.authService.registerFirstAccess({
            user,
            company
        });
    }

    @Post('new-user')
    newUser(@Body() user: CreateUserDto) {
        return this.authService.registerNewUser(user);
    }
}
