import { PartialType } from '@nestjs/swagger';
import { CreateHealthIndicationDto } from './create-health-indication.dto';

export class UpdateHealthIndicationDto extends PartialType(CreateHealthIndicationDto) {}
