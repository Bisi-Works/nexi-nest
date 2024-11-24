import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { connect } from 'http2';

@Injectable()
export class ProposalService {
    constructor(private prisma: PrismaService) {}

    create(createProposalDto: CreateProposalDto) {
        return this.prisma.proposal.create({
            data: createProposalDto
        });
    }

    findAll() {
        return this.prisma.proposal.findMany();
    }

    findOne(id: number) {
        return this.prisma.proposal.findUnique({ where: { id } });
    }

    update(id: number, updateProposalDto: UpdateProposalDto) {
        return this.prisma.proposal.update({
            where: { id },
            data: updateProposalDto
        });
    }

    remove(id: number) {
        return this.prisma.proposal.delete({ where: { id } });
    }
}
