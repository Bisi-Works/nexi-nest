import { Injectable } from '@nestjs/common';
import { CreateProposalHistoryDto } from './dto/create-proposal-history.dto';
import { UpdateProposalHistoryDto } from './dto/update-proposal-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProposalHistoryService {
    constructor(private readonly prisma: PrismaService) {}

    create(createProposalHistoryDto: CreateProposalHistoryDto){
        return this.prisma.proposalHistory.create({data: createProposalHistoryDto});
    }

    findAll() {
        return this.prisma.proposalHistory.findMany();
    }

    findOne(id: number) {
        return this.prisma.proposalHistory.findUnique({ where: { id } });
    }

    update(id: number, updateProposalHistoryDto: UpdateProposalHistoryDto) {
        return this.prisma.proposalHistory.update({
            where: { id },
            data: updateProposalHistoryDto
        });
    }

    remove(id: number) {
        return this.prisma.proposalHistory.delete({ where: { id } });
    }
}
