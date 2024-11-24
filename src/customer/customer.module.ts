import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { StorageService } from 'src/storage/storage.service';
import { UserExistsConstraint } from 'src/decorators/user-exists.constraint';
import { CompanyExistsConstraint } from 'src/decorators/company-exists.constraint';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [CustomerController],
    providers: [
        PrismaService,
        CustomerService,
        StorageService,
        UserExistsConstraint,
        CompanyExistsConstraint
    ]
})
export class CustomerModule {}
