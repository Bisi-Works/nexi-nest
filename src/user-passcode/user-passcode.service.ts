import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateUserPasscodeDto } from './dto/create-user-passcode.dto';
import { UpdateUserPasscodeDto } from './dto/update-user-passcode.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';
import { CreateUserPasscodeInsideApiDto } from './dto/create-user-passcode-inside-api.dto';

@Injectable()
export class UserPasscodeService {
    private readonly logger = new Logger(UserPasscodeService.name);

    constructor(
        private prisma: PrismaService,
        private entityExistenceChecker: EntityExistenceChecker
    ) {}

    async create(createUserPasscodeDto: CreateUserPasscodeDto) {
        const createUserPasscodeInsideApiDto =
            new CreateUserPasscodeInsideApiDto(
                crypto
                    .getRandomValues(new Uint32Array(1))[0]
                    .toString(16)
                    .slice(0, 6),
                createUserPasscodeDto.userId
            );

        return await this.prisma.userPasscode.create({
            data: createUserPasscodeInsideApiDto
        });
    }

    async getUserPasscode(userId: number) {
        const userPasscode = await this.prisma.userPasscode.findUnique({
            where: {
                userId
            }
        });

        console.log(userPasscode);

        // If the passcode exists and is not used, return it
        if (userPasscode && !userPasscode.used) {
            return userPasscode.passcode;
        }

        // If the passcode exists and is used, generate a new one
        if (userPasscode && userPasscode.used) {
            const createUserPasscodeInsideApiDto =
                new CreateUserPasscodeInsideApiDto(
                    crypto
                        .getRandomValues(new Uint32Array(1))[0]
                        .toString(16)
                        .slice(0, 6),
                    userId
                );

            const newPasscode = await this.prisma.userPasscode.update({
                data: {
                    passcode: createUserPasscodeInsideApiDto.passcode,
                    used: false
                },
                where: {
                    userId
                }
            });

            return newPasscode.passcode;
        }

        // If the passcode does not exist, create a new one
        const createUserPasscodeInsideApiDto =
            new CreateUserPasscodeInsideApiDto(
                crypto
                    .getRandomValues(new Uint32Array(1))[0]
                    .toString(16)
                    .slice(0, 6),
                userId
            );

        const newPasscode = await this.prisma.userPasscode.create({
            data: createUserPasscodeInsideApiDto
        });

        return newPasscode.passcode;
    }

    findAll() {
        return this.prisma.userPasscode.findMany();
    }

    findOne(id: number) {
        return this.prisma.userPasscode.findUnique({
            where: {
                id
            }
        });
    }

    findByUserId(userId: number) {
        return this.prisma.userPasscode.findUnique({
            where: {
                userId
            }
        });
    }

    markAsUsed(id: number) {
        return this.prisma.userPasscode.update({
            where: {
                id
            },
            data: {
                used: true
            }
        });
    }

    async update(id: number, updateUserPasscodeDto: UpdateUserPasscodeDto) {
        if (
            !(await this.entityExistenceChecker.checkEntityExistence({
                entityType: 'UserPasscode',
                queryBy: 'id',
                queryParams: id
            }))
        ) {
            throw new HttpException(
                'Passcode nao encontrado.',
                HttpStatus.NOT_FOUND
            );
        }

        return this.prisma.userPasscode.update({
            where: {
                id
            },
            data: updateUserPasscodeDto
        });
    }

    async remove(id: number) {
        if (
            !(await this.entityExistenceChecker.checkEntityExistence({
                entityType: 'UserPasscode',
                queryBy: 'id',
                queryParams: id
            }))
        ) {
            throw new HttpException(
                'Passcode nao encontrado.',
                HttpStatus.NOT_FOUND
            );
        }

        return this.prisma.userPasscode.delete({
            where: {
                id: id
            }
        });
    }
}
