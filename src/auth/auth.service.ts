import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { plainToClass } from 'class-transformer';
import { CompanyService } from 'src/company/company.service';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleService } from 'src/role/role.service';
import { UserPasscodeService } from 'src/user-passcode/user-passcode.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserFirstAccessDto } from 'src/user/dto/user-first-access.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
        private readonly companyService: CompanyService,
        private readonly roleService: RoleService,
        private readonly userPasscodeService: UserPasscodeService,
        private readonly jwtService: JwtService
    ) {}

    async registerFirstAccess({
        user,
        company
    }: {
        user: UserFirstAccessDto;
        company: CreateCompanyDto;
    }) {
        return this.prismaService.$transaction(
            async (prisma: PrismaService) => {
                const newCompany = await this.companyService.create(
                    company,
                    prisma
                );

                const newRoles = await this.roleService.createFirstRoles(
                    newCompany.id,
                    prisma
                );

                console.log(newRoles);

                user.companyId = newCompany.id;
                user.roleId = newRoles[0].id;

                const userWithRoleAndCompany = plainToClass(
                    CreateUserDto,
                    user
                );

                const newUser = await this.userService.create(
                    userWithRoleAndCompany,
                    prisma
                );

                const payload = {
                    sub: newUser.id,
                    email: newUser.email,
                    name: newUser.fullName,
                    company: newCompany,
                    role: newUser.role
                };

                return {
                    jwt: this.jwtService.sign(payload, {
                        secret: process.env.JWT_SECRET
                    })
                };
            }
        );
    }

    async registerNewUser(user: CreateUserDto) {
        const newUser = await this.userService.create(user);

        const payload = {
            sub: newUser.id,
            email: newUser.email,
            name: newUser.fullName,
            company: newUser.company,
            role: newUser.role
        };

        return {
            jwt: this.jwtService.sign(payload, {
                secret: process.env.JWT_SECRET
            })
        };
    }

    async login(email: string, passcode: string) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new HttpException(
                'Usuario nao encontrado',
                HttpStatus.NOT_FOUND
            );
        }

        if (!user.userPasscode) {
            throw new HttpException('Não autorizado', HttpStatus.UNAUTHORIZED);
        }

        if (
            !user.userPasscode.some(
                (pass) => pass.passcode === passcode && !pass.used
            )
        ) {
            throw new HttpException(
                'Código inválido.',
                HttpStatus.UNAUTHORIZED
            );
        }

        await this.userPasscodeService.markAsUsed(user.userPasscode[0].id);

        const payload = {
            sub: user.id,
            email: user.email,
            name: user.fullName,
            company: user.company,
            role: user.role
        };

        return {
            jwt: this.jwtService.sign(payload, {
                secret: process.env.JWT_SECRET
            })
        };
    }

    async getPasscode(email: string) {
        if (!email) {
            throw new HttpException(
                'Email é obrigatório',
                HttpStatus.BAD_REQUEST
            );
        }
        
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new HttpException(
                'Usuario nao encontrado',
                HttpStatus.NOT_FOUND
            );
        }

        const userPasscode = await this.userPasscodeService.getUserPasscode(
            user.id
        );

        return {
            passcode: userPasscode
        };
    }
}
