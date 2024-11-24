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
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateProposalOnControllerDto } from './dto/create-proposal-on-controller.dto';
import { plainToClass } from 'class-transformer';
import { generateStorageParams, uploadFileToStorage } from 'src/util/files.utils';
import { StorageService } from 'src/storage/storage.service';

@Controller('proposal')
export class ProposalController {
    constructor(private readonly proposalService: ProposalService, private readonly storageService: StorageService) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'fileIncomeProof', maxCount: 1 },
            { name: 'fileAddressProof', maxCount: 1 },
            { name: 'fileAddtionalDocuments', maxCount: 1 },
            { name: 'filePreviousYearBalance', maxCount: 1 },
            { name: 'fileCurrentYearBalance', maxCount: 1 },
            { name: 'filePreviousYearIncomeStatement', maxCount: 1 },
            { name: 'fileCurrentYearIncomeStatement', maxCount: 1 },
            { name: 'fileSignedRegistrationForm', maxCount: 1 }
        ])
    )
    async create(
        @UploadedFiles()
        files: {
            fileIncomeProof?: Express.Multer.File[];
            fileAddressProof?: Express.Multer.File[];
            fileAddtionalDocuments?: Express.Multer.File[];
            filePreviousYearBalance?: Express.Multer.File[];
            fileCurrentYearBalance?: Express.Multer.File[];
            filePreviousYearIncomeStatement?: Express.Multer.File[];
            fileCurrentYearIncomeStatement?: Express.Multer.File[];
            fileSignedRegistrationForm?: Express.Multer.File[];
        },
        @Body() body: CreateProposalOnControllerDto
    ) {
        const createProposalDto = plainToClass(
            CreateProposalDto,
            JSON.parse(body.data)
        );

        createProposalDto.incomeProofURL = await uploadFileToStorage(files?.fileIncomeProof[0], this.storageService);
        createProposalDto.addressProofURL = await uploadFileToStorage(files?.fileAddressProof[0], this.storageService);
        createProposalDto.addtionalDocumentsURL = await uploadFileToStorage(files?.fileAddtionalDocuments[0], this.storageService);
        createProposalDto.previousYearBalanceURL = await uploadFileToStorage(files?.filePreviousYearBalance[0], this.storageService);
        createProposalDto.currentYearBalanceURL = await uploadFileToStorage(files?.fileCurrentYearBalance[0], this.storageService);
        createProposalDto.previousYearIncomeStatementURL = await uploadFileToStorage(files?.filePreviousYearIncomeStatement[0], this.storageService);
        createProposalDto.currentYearIncomeStatementURL = await uploadFileToStorage(files?.fileCurrentYearIncomeStatement[0], this.storageService);
        createProposalDto.signedRegistrationFormURL = await uploadFileToStorage(files?.fileSignedRegistrationForm[0], this.storageService);

        return this.proposalService.create(createProposalDto);
    }

    @Get()
    findAll() {
        return this.proposalService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.proposalService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateProposalDto: UpdateProposalDto
    ) {
        return this.proposalService.update(+id, updateProposalDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.proposalService.remove(+id);
    }
}
