import { PrismaService } from '../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';

@Injectable()
export class RoleService {
    constructor(
        private prisma: PrismaService,
        private entityExistenceChecker: EntityExistenceChecker
    ) {}

    create(createRoleDto: CreateRoleDto) {
        return this.prisma.role.create({
            data: {
                name: createRoleDto.name,
                permissions: JSON.stringify(createRoleDto.permissions),
                companyId: createRoleDto.companyId
            }
        });
    }

    async createFirstRoles(
        companyId: number,
        prisma: PrismaService = this.prisma
    ) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'Diretor',
                    permissions: JSON.stringify(['*']),
                    companyId: companyId
                },
                {
                    name: 'Supervisor',
                    permissions: JSON.stringify(['*']),
                    companyId: companyId
                },
                {
                    name: 'Vendedor',
                    permissions: JSON.stringify(['*']),
                    companyId: companyId
                }
            ]
        });

        return prisma.role.findMany({
            where: {
                companyId: companyId
            }
        });
    }

    findAll() {
        return this.prisma.role.findMany();
    }

    findOne(id: number) {
        return this.prisma.role.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, updateRoleDto: UpdateRoleDto) {
        if (
            !(await this.entityExistenceChecker.checkEntityExistence({
                entityType: 'role',
                queryBy: 'id',
                queryParams: id
            }))
        ) {
            throw new HttpException(
                'Cargo nao encontrado',
                HttpStatus.NOT_FOUND
            );
        }

        return this.prisma.role.update({
            where: {
                id
            },
            data: {
                name: updateRoleDto.name,
                permissions: JSON.stringify(updateRoleDto.permissions),
                companyId: updateRoleDto.companyId,
                users: {
                    connect: updateRoleDto.usersIds?.map((userId) => ({
                        id: userId
                    }))
                }
            }
        });
    }

    async remove(id: number) {
        if (
            !(await this.entityExistenceChecker.checkEntityExistence({
                entityType: 'role',
                queryBy: 'id',
                queryParams: id
            }))
        ) {
            throw new HttpException(
                'Cargo nao encontrado',
                HttpStatus.NOT_FOUND
            );
        }

        return this.prisma.role.delete({
            where: {
                id
            }
        });
    }
}
