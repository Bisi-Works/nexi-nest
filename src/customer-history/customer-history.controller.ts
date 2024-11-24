import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerHistoryService } from './customer-history.service';
import { CreateCustomerHistoryDto } from './dto/create-customer-history.dto';
import { UpdateCustomerHistoryDto } from './dto/update-customer-history.dto';

@Controller('customer-history')
export class CustomerHistoryController {
  constructor(private readonly customerHistoryService: CustomerHistoryService) {}

  @Post()
  create(@Body() createCustomerHistoryDto: CreateCustomerHistoryDto) {
    return this.customerHistoryService.create(createCustomerHistoryDto);
  }

  @Get()
  findAll() {
    return this.customerHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerHistoryDto: UpdateCustomerHistoryDto) {
    return this.customerHistoryService.update(+id, updateCustomerHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerHistoryService.remove(+id);
  }
}
