import { IsJSON, IsOptional } from "class-validator";

export class CreateProposalOnControllerDto {

    @IsJSON()
    data: string;

    @IsOptional()
    files: File[];

}
