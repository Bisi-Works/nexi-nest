import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsArray, IsNumber } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
