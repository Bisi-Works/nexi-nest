import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private entityExistenceChecker: EntityExistenceChecker
    ) {}

    create(createUserDto: CreateUserDto, prisma: PrismaService = this.prisma) {
        return prisma.user.create({ data: createUserDto, include: { role: true, company: true } });
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email: email },
            include: { role: true, userPasscode: true, company: true }
        });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        if (
            !(await this.entityExistenceChecker.checkEntityExistence({
                entityType: 'user',
                queryBy: 'id',
                queryParams: id
            }))
        ) {
            throw new HttpException(
                'Usuario nao encontrado',
                HttpStatus.NOT_FOUND
            );
        }

        return this.prisma.user.update({ where: { id }, data: updateUserDto });
    }

    async remove(id: number) {
        if (
            !(await this.entityExistenceChecker.checkEntityExistence({
                entityType: 'user',
                queryBy: 'id',
                queryParams: id
            }))
        ) {
            throw new HttpException(
                'Usuario nao encontrado',
                HttpStatus.NOT_FOUND
            );
        }

        return this.prisma.user.delete({ where: { id } });
    }
}
