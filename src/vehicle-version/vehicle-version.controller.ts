import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleVersionService } from './vehicle-version.service';
import { CreateVehicleVersionDto } from './dto/create-vehicle-version.dto';
import { UpdateVehicleVersionDto } from './dto/update-vehicle-version.dto';

@Controller('vehicle-version')
export class VehicleVersionController {
  constructor(private readonly vehicleVersionService: VehicleVersionService) {}

  @Post()
  create(@Body() createVehicleVersionDto: CreateVehicleVersionDto) {
    return this.vehicleVersionService.create(createVehicleVersionDto);
  }

  @Get()
  findAll() {
    return this.vehicleVersionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleVersionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleVersionDto: UpdateVehicleVersionDto) {
    return this.vehicleVersionService.update(+id, updateVehicleVersionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleVersionService.remove(+id);
  }
}
