import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleOffersService } from './vehicle-offers.service';
import { CreateVehicleOfferDto } from './dto/create-vehicle-offer.dto';
import { UpdateVehicleOfferDto } from './dto/update-vehicle-offer.dto';

@Controller('vehicle-offers')
export class VehicleOffersController {
  constructor(private readonly vehicleOffersService: VehicleOffersService) {}

  @Post()
  create(@Body() createVehicleOfferDto: CreateVehicleOfferDto) {
    return this.vehicleOffersService.create(createVehicleOfferDto);
  }

  @Get()
  findAll() {
    return this.vehicleOffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleOffersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleOfferDto: UpdateVehicleOfferDto) {
    return this.vehicleOffersService.update(+id, updateVehicleOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleOffersService.remove(+id);
  }
}
