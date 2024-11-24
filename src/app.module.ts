import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { UserPasscodeModule } from './user-passcode/user-passcode.module';
import { CustomerModule } from './customer/customer.module';
import { StorageModule } from './storage/storage.module';
import { MediaModule } from './media/media.module';
import { CustomerHistoryModule } from './customer-history/customer-history.module';
import { RentalAgencyModule } from './rental-agency/rental-agency.module';
import { ProposalModule } from './proposal/proposal.module';
import { ProposalHistoryModule } from './proposal-history/proposal-history.module';
import { ProposalWorkflowModule } from './proposal-workflow/proposal-workflow.module';
import { ContractModule } from './contract/contract.module';
import { HealthIndicationModule } from './health-indication/health-indication.module';
import { VehicleOffersModule } from './vehicle-offers/vehicle-offers.module';
import { VehicleVersionModule } from './vehicle-version/vehicle-version.module';
import { VehicleModelModule } from './vehicle-model/vehicle-model.module';
import { VehicleBrandModule } from './vehicle-brand/vehicle-brand.module';
import { AuthGuard } from './auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [CompanyModule, UserModule, AuthModule, RoleModule, UserPasscodeModule, CustomerModule, StorageModule, MediaModule, CustomerHistoryModule, RentalAgencyModule, ProposalModule, ProposalHistoryModule, ProposalWorkflowModule, ContractModule, HealthIndicationModule, VehicleBrandModule, VehicleModelModule, VehicleVersionModule, VehicleOffersModule, VehicleOffersModule],
  controllers: [AppController],
  providers: [
    AppService,
    JwtService,
    {
      provide: "APP_GUARD",
      useClass: AuthGuard
    }
  ],
})
export class AppModule {}
