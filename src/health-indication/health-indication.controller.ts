import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthIndicationService } from './health-indication.service';
import { CreateHealthIndicationDto } from './dto/create-health-indication.dto';
import { UpdateHealthIndicationDto } from './dto/update-health-indication.dto';

@Controller('health-indication')
export class HealthIndicationController {
  constructor(private readonly healthIndicationService: HealthIndicationService) {}

  @Post()
  create(@Body() createHealthIndicationDto: CreateHealthIndicationDto) {
    return this.healthIndicationService.create(createHealthIndicationDto);
  }

  @Get()
  findAll() {
    return this.healthIndicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthIndicationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthIndicationDto: UpdateHealthIndicationDto) {
    return this.healthIndicationService.update(+id, updateHealthIndicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthIndicationService.remove(+id);
  }
}
