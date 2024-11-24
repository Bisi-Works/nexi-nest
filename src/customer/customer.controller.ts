import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFiles
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
    FileFieldsInterceptor,
    FileInterceptor,
    FilesInterceptor
} from '@nestjs/platform-express';
import { StorageService } from 'src/storage/storage.service';
import * as uuid from 'uuid';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CreateCustomerOnControllerDto } from './dto/create-customer-on-controller.dto';
import { plainToClass } from 'class-transformer';
import * as path from 'path';
import {
    generateStorageMetadata,
    generateStorageParams,
    generateStoragePath,
    getFileBuffer,
    getFileMimeType
} from 'src/util/files.utils';

@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService,
        private readonly storageService: StorageService
    ) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'fileDrivingLicense', maxCount: 1 },
            { name: 'fileSelfie', maxCount: 1 },
            { name: 'fileSocialContract', maxCount: 1 }
        ])
    )
    async create(
        @UploadedFiles()
        files: {
            fileDrivingLicense?: Express.Multer.File[];
            fileSelfie?: Express.Multer.File[];
            fileSocialContract?: Express.Multer.File[];
        },
        @Body() body: CreateCustomerOnControllerDto
    ) {
        const createCustomerDto = plainToClass(
            CreateCustomerDto,
            JSON.parse(body.data)
        );

        if (files.fileDrivingLicense?.length > 0) {
            const { storagePath, mimeType, buffer, metadata } =
                generateStorageParams(files.fileDrivingLicense[0]);
            createCustomerDto.drivingLicenseURL =
                await this.storageService.save(
                    storagePath,
                    mimeType,
                    buffer,
                    metadata
                );
        }
        
        if (files.fileSelfie?.length > 0) {
            const { storagePath, mimeType, buffer, metadata } =
                generateStorageParams(files.fileSelfie[0]);
            createCustomerDto.selfieURL = await this.storageService.save(
                storagePath,
                mimeType,
                buffer,
                metadata
            );
        }

        if (files.fileSocialContract?.length > 0) {
            const { storagePath, mimeType, buffer, metadata } =
                generateStorageParams(files.fileSocialContract[0]);
            createCustomerDto.selfieURL = await this.storageService.save(
                storagePath,
                mimeType,
                buffer,
                metadata
            );
        }

        return this.customerService.create(createCustomerDto);
    }

    @Get()
    findAll() {
        return this.customerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.customerService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateCustomerDto: UpdateCustomerDto
    ) {
        return this.customerService.update(+id, updateCustomerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.customerService.remove(+id);
    }
}
