import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CompanyExists } from 'src/decorators/company-exists.decorator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) { }
