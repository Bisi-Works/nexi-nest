import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalAgencyService } from './rental-agency.service';
import { CreateRentalAgencyDto } from './dto/create-rental-agency.dto';
import { UpdateRentalAgencyDto } from './dto/update-rental-agency.dto';

@Controller('rental-agency')
export class RentalAgencyController {
  constructor(private readonly rentalAgencyService: RentalAgencyService) {}

  @Post()
  create(@Body() createRentalAgencyDto: CreateRentalAgencyDto) {
    return this.rentalAgencyService.create(createRentalAgencyDto);
  }

  @Get()
  findAll() {
    return this.rentalAgencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalAgencyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalAgencyDto: UpdateRentalAgencyDto) {
    return this.rentalAgencyService.update(+id, updateRentalAgencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalAgencyService.remove(+id);
  }
}
