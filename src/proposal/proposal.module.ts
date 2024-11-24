import { PrismaService } from '../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { ProposalController } from './proposal.controller';
import { CustomerExistsConstraint } from 'src/decorators/customer-exists.constraint';
import { RentalAgencyExistsConstraint } from 'src/decorators/rental-agency-exists.constraint';
import { StorageService } from 'src/storage/storage.service';

@Module({
    controllers: [ProposalController],
    providers: [
        PrismaService,
        ProposalService,
        StorageService,
        CustomerExistsConstraint,
        RentalAgencyExistsConstraint
    ]
})
export class ProposalModule {}
