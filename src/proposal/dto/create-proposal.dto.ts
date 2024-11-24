import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl
} from 'class-validator';
import { CustomerExists } from 'src/decorators/customer-exists.decorator';
import { RentalAgencyExists } from 'src/decorators/rental-agency-exists.decorator';

export class CreateProposalDto {
    @IsString({ message: 'As observações precisam ser uma string' })
    @IsOptional()
    notes: string;

    @IsString({ message: 'O status precisa ser uma string' })
    @IsOptional()
    status: string;

    @IsString({ message: 'O modelo do veiculo precisa ser uma string' })
    @IsOptional()
    vehicleModel: string;

    @IsString({ message: 'A cor do veiculo precisa ser uma string' })
    @IsOptional()
    carColor: string;

    @IsString({ message: 'O final da placa precisa ser uma string' })
    @IsOptional()
    plateEnd: string;

    @IsBoolean({
        message: 'A opção de carro adicional precisa ser um booleano'
    })
    @IsOptional()
    additionalCar: boolean;

    @IsString({
        message: 'O tempo de contrato em meses precisa ser uma string'
    })
    @IsOptional()
    contractTermMonths: string;

    @IsString({ message: 'O pacote de kilometros precisa ser uma string' })
    @IsOptional()
    kmPackage: string;

    @IsString({ message: 'A loja de retirada precisa ser uma string' })
    @IsOptional()
    pickupStore: string;

    @IsString({ message: 'O metodo de pagamento precisa ser uma string' })
    @IsOptional()
    paymentMethod: string;

    @IsString({ message: 'O id externo da proposta precisa ser uma string' })
    @IsOptional()
    externalProposalId: string;

    @IsString({
        message: 'O nome do motorista principal precisa ser uma string'
    })
    @IsOptional()
    mainDriver: string;

    @IsNumber({}, { message: 'A quantidade de parcelas precisa ser um número' })
    @IsOptional()
    installmentAnticipationQty: number;

    @IsNumber({}, { message: 'A quantidade de veiculos precisa ser um número' })
    @IsOptional()
    vehicleQty: number;

    @IsNumber({}, { message: 'O valor da parcela precisa ser um número' })
    @IsOptional()
    installmentAmount: number;

    @IsNumber({}, { message: 'O valor de entrega precisa ser um número' })
    deliveryPrice: number;

    @IsString({
        message: 'O URL da comprovação de renda precisa ser uma string'
    })
    @IsUrl({}, { message: 'O URL da comprovação de renda precisa ser válido' })
    incomeProofURL: string;

    @IsString({
        message: 'O URL do comprovante de endereço precisa ser uma string'
    })
    @IsUrl(
        {},
        { message: 'O URL do comprovante de endereço precisa ser válido' }
    )
    addressProofURL: string;

    @IsString({
        message: 'O URL dos documentos adicionais precisam ser uma string'
    })
    @IsUrl(
        {},
        { message: 'O URL dos documentos adicionais precisa ser válido' }
    )
    addtionalDocumentsURL: string;

    @IsString({
        message: 'O URL do balanço do ano anterior precisa ser uma string'
    })
    @IsUrl(
        {},
        { message: 'O URL do balanço do ano anterior precisa ser válido' }
    )
    previousYearBalanceURL: string;

    @IsString({
        message: 'O URL do balanço do ano atual precisa ser uma string'
    })
    @IsUrl({}, { message: 'O URL do balanço do ano atual precisa ser válido' })
    currentYearBalanceURL: string;

    @IsString({
        message: 'O URL do extrato do ano anterior precisa ser uma string'
    })
    @IsUrl(
        {},
        { message: 'O URL do extrato do ano anterior precisa ser válido' }
    )
    previousYearIncomeStatementURL: string;

    @IsString({
        message: 'O URL do extrato do ano atual precisa ser uma string'
    })
    @IsUrl({}, { message: 'O URL do extrato do ano atual precisa ser válido' })
    currentYearIncomeStatementURL: string;

    @IsString({ message: 'O URL do contrato social precisa ser uma string' })
    @IsUrl({}, { message: 'O URL do contrato social precisa ser válido' })
    signedRegistrationFormURL: string;

    @RentalAgencyExists({ message: 'A locadora não existe no banco de dados' })
    @IsNumber({}, { message: 'O id da locadora precisa ser um número' })
    @IsNotEmpty({ message: 'O ID da locadora deve ser informado' })
    rentalAgencyId: number;

    @CustomerExists({ message: 'O cliente não existe no banco de dados' })
    @IsNumber({}, { message: 'O id do cliente precisa ser um número' })
    @IsNotEmpty({ message: 'O ID do cliente deve ser informado' })
    customerId: number;
}
