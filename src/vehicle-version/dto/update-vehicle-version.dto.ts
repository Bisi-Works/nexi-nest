import { PartialType } from '@nestjs/swagger';
import { CreateVehicleVersionDto } from './create-vehicle-version.dto';

export class UpdateVehicleVersionDto extends PartialType(CreateVehicleVersionDto) {}
