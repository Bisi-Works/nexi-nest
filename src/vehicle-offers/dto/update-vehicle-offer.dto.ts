import { PartialType } from '@nestjs/swagger';
import { CreateVehicleOfferDto } from './create-vehicle-offer.dto';

export class UpdateVehicleOfferDto extends PartialType(CreateVehicleOfferDto) {}
