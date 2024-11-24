import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface EntityExistenceQuery {
    entityType: string;
    queryBy: Record<string, any> | string;
    queryParams?: Record<string, any> | string | number;
    include?: Array<string | Record<string, any>>;
    deepInclude?: Record<string, string[]>;
}

@Injectable()
export class EntityExistenceChecker {
    constructor(private prisma: PrismaService) {}

    async checkEntityExistence(query: EntityExistenceQuery) {
        const { entityType, queryBy, queryParams, include, deepInclude } =
            query;
        let whereClause: any = {};

        if (typeof queryBy === 'string') {
            if (!queryParams) {
                throw new Error(
                    'Você deve fornecer queryParams quando queryBy é uma string.'
                );
            }
            whereClause = { [queryBy]: queryParams }
        } else if (typeof queryBy === 'object') {
            whereClause = queryBy;
        } else {
            throw new Error('queryBy deve ser uma string ou um objeto.');
        }

        let includeObject: any = undefined;

        if (include) {
            includeObject = include.reduce((acc, item) => {
                if (typeof item === 'string') {
                    acc[item] = true;
                } else {
                    const key = Object.keys(item)[0];
                    acc[key] = item[key];
                }
                return acc;
            }, {});
        }

        let entity = await this.prisma[entityType].findUnique({
            where: whereClause,
            include: includeObject
        });

        if (deepInclude) {
            for (const [relation, deepRelations] of Object.entries(
                deepInclude
            )) {
                let deepIncludeObject: any = {};

                deepRelations.forEach((subRelation: string) => {
                    const subRelationArr = subRelation.split('.');
                    subRelationArr.forEach((subSubRelation, index) => {
                        if (index - 1 >= 0) {
                            deepIncludeObject[subRelationArr[index - 1]] = {
                                select: {
                                    [subRelationArr[index - 1].slice(0, -1)]: {
                                        include: {
                                            [subSubRelation]: true
                                        }
                                    }
                                }
                            };
                        } else {
                            deepIncludeObject[subSubRelation || subRelation] =
                                true;
                        }
                    });
                });

                if (!entity) {
                    break;
                }

                entity = await this.prisma[entityType].findUnique({
                    where: whereClause,
                    include: {
                        [relation]: {
                            select: deepIncludeObject
                        }
                    }
                });
            }
        }

        if (deepInclude) {
            for (const [relation, deepRelations] of Object.entries(
                deepInclude
            )) {
                entity = await this.prisma[entityType].findUnique({
                    where: whereClause,
                    include: {
                        [relation]: {
                            select: Object.fromEntries(
                                deepRelations.map((key) => [key, true])
                            )
                        }
                    }
                });
            }
        }

        if (deepInclude) {
            for (const [relation, deepRelations] of Object.entries(
                deepInclude
            )) {
                entity = await this.prisma[entityType].findUnique({
                    where: whereClause,
                    include: {
                        [relation]: {
                            select: Object.fromEntries(
                                deepRelations.map((key) => [key, true])
                            )
                        }
                    }
                });
            }
        }

        return entity;
    }
}
