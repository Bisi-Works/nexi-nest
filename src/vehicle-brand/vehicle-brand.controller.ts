import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleBrandService } from './vehicle-brand.service';
import { CreateVehicleBrandDto } from './dto/create-vehicle-brand.dto';
import { UpdateVehicleBrandDto } from './dto/update-vehicle-brand.dto';

@Controller('vehicle-brand')
export class VehicleBrandController {
  constructor(private readonly vehicleBrandService: VehicleBrandService) {}

  @Post()
  create(@Body() createVehicleBrandDto: CreateVehicleBrandDto) {
    return this.vehicleBrandService.create(createVehicleBrandDto);
  }

  @Get()
  findAll() {
    return this.vehicleBrandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleBrandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleBrandDto: UpdateVehicleBrandDto) {
    return this.vehicleBrandService.update(+id, updateVehicleBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleBrandService.remove(+id);
  }
}
