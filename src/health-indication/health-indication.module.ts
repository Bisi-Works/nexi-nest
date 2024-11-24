import { UserExistsConstraint } from './../decorators/user-exists.constraint';
import { Module } from '@nestjs/common';
import { HealthIndicationService } from './health-indication.service';
import { HealthIndicationController } from './health-indication.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [HealthIndicationController],
    providers: [PrismaService, UserExistsConstraint, HealthIndicationService]
})
export class HealthIndicationModule {}
