import { PartialType } from '@nestjs/swagger';
import { CreateCustomerHistoryDto } from './create-customer-history.dto';

export class UpdateCustomerHistoryDto extends PartialType(CreateCustomerHistoryDto) {}
