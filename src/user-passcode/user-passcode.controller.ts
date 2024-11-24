import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPasscodeService } from './user-passcode.service';
import { CreateUserPasscodeDto } from './dto/create-user-passcode.dto';
import { UpdateUserPasscodeDto } from './dto/update-user-passcode.dto';

@Controller('user-passcode')
export class UserPasscodeController {
  constructor(private readonly userPasscodeService: UserPasscodeService) {}

  @Post()
  create(@Body() createUserPasscodeDto: CreateUserPasscodeDto) {
    return this.userPasscodeService.create(createUserPasscodeDto);
  }

  @Get()
  findAll() {
    return this.userPasscodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPasscodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPasscodeDto: UpdateUserPasscodeDto) {
    return this.userPasscodeService.update(+id, updateUserPasscodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPasscodeService.remove(+id);
  }
}
