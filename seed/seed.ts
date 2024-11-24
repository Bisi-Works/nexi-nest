import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed para Company
  const company = await prisma.company.create({
    data: {
      companyName: 'Example Company',
      cnpj: '12345678000100',
      phone: '1234567890',
      enabled: true,
    },
  });

  // Seed para Role
  const role = await prisma.role.create({
    data: {
      name: 'Admin',
      companyId: company.id,
    },
  });

  // Seed para User
  const user = await prisma.user.create({
    data: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      roleId: role.id,
      companyId: company.id,
    },
  });

  // Seed para Customer
  const customer = await prisma.customer.create({
    data: {
      personType: 'PF',
      fullName: 'Jane Doe',
      userId: user.id,
      companyId: company.id,
    },
  });

  // Seed para RentalAgency
  const rentalAgency = await prisma.rentalAgency.create({
    data: {
      name: 'Example Rental Agency',
    },
  });

  // Seed para Proposal
  const proposal = await prisma.proposal.create({
    data: {
      customerId: customer.id,
      rentalAgencyId: rentalAgency.id,
    },
  });

  // Seed para ProposalHistory
  const proposalHistory = await prisma.proposalHistory.create({
    data: {
      description: 'Initial proposal history',
      body: { key: 'value' },
      proposalId: proposal.id,
      userId: user.id,
    },
  });

  // Seed para ProposalWorkflow
  const proposalWorkflow = await prisma.proposalWorkflow.create({
    data: {
      description: 'Initial workflow',
      proposalId: proposal.id,
      userId: user.id,
    },
  });

  // Seed para Contract
  const contract = await prisma.contract.create({
    data: {
      expectedContractMonths: 12,
      proposalId: proposal.id,
      customerId: customer.id,
      userId: user.id,
    },
  });

  // Seed para HealthIndication
  const healthIndication = await prisma.healthIndication.create({
    data: {
      fullName: 'Health Indication Name',
      phone: '1234567890',
      userId: user.id,
    },
  });

  // Seed para VehicleBrand
  const vehicleBrand = await prisma.vehicleBrand.create({
    data: {
      name: 'Example Brand',
    },
  });

  // Seed para VehicleModel
  const vehicleModel = await prisma.vehicleModel.create({
    data: {
      name: 'Example Model',
      vehicleBrandId: vehicleBrand.id,
    },
  });

  // Seed para VehicleVersion
  const vehicleVersion = await prisma.vehicleVersion.create({
    data: {
      name: 'Example Version',
      vehicleModelId: vehicleModel.id,
    },
  });

  // Seed para VehicleOffer
  const vehicleOffer = await prisma.vehicleOffer.create({
    data: {
      term: '12 months',
      km: '10000',
      personType: 'PF',
      price: 1000.00,
      discountedPrice: 900.00,
      rentalAgencyId: rentalAgency.id,
      vehicleVersionId: vehicleVersion.id,
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });