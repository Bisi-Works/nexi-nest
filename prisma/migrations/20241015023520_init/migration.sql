-- CreateTable
CREATE TABLE `Companie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logoUrl` VARCHAR(191) NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `fantasyName` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Companie_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `permissions` JSON NULL,
    `companieId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL,
    `companieId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPasscode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `passcode` VARCHAR(191) NOT NULL,
    `used` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `UserPasscode_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personType` ENUM('PF', 'PJ', 'PF_PJ') NOT NULL,
    `fullName` VARCHAR(191) NULL,
    `motherName` VARCHAR(191) NULL,
    `rg` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `birthdayDate` DATETIME(3) NULL,
    `email` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `uf` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `addressNumber` VARCHAR(191) NULL,
    `addressComplement` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `homePhone` VARCHAR(191) NULL,
    `earnings` DECIMAL(65, 30) NULL,
    `maritalStatus` VARCHAR(191) NULL,
    `jobTitle` VARCHAR(191) NULL,
    `workplace` VARCHAR(191) NULL,
    `companyTime` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NULL,
    `cnhCategory` VARCHAR(191) NULL,
    `cnhValidity` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NULL,
    `companyActivityStartDate` DATETIME(3) NULL,
    `firstCNHDate` DATETIME(3) NULL,
    `jobType` VARCHAR(191) NULL,
    `companyName` VARCHAR(191) NULL,
    `fantasyName` VARCHAR(191) NULL,
    `companyCNPJ` VARCHAR(191) NULL,
    `companyCep` VARCHAR(191) NULL,
    `companyUF` VARCHAR(191) NULL,
    `companyCity` VARCHAR(191) NULL,
    `companyAddress` VARCHAR(191) NULL,
    `companyAddressNumber` VARCHAR(191) NULL,
    `companyAddressComplement` VARCHAR(191) NULL,
    `companyPhone` VARCHAR(191) NULL,
    `companyEmail` VARCHAR(191) NULL,
    `companyType` VARCHAR(191) NULL,
    `financialContactNumber` VARCHAR(191) NULL,
    `financialContactEmail` VARCHAR(191) NULL,
    `financialContactName` VARCHAR(191) NULL,
    `drivingLicenseURL` VARCHAR(191) NULL,
    `selfieURL` VARCHAR(191) NULL,
    `socialContractURL` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,
    `companieId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RentalAgency` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logoURL` VARCHAR(191) NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proposal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `notes` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `vehicleModel` VARCHAR(191) NULL,
    `carColor` VARCHAR(191) NULL,
    `plateEnd` VARCHAR(191) NULL,
    `additionarCar` BOOLEAN NULL,
    `contractTermMonths` VARCHAR(191) NULL,
    `kmPackage` VARCHAR(191) NULL,
    `pickupStore` VARCHAR(191) NULL,
    `paymentMethod` VARCHAR(191) NULL,
    `externalProposalId` VARCHAR(191) NULL,
    `mainDriver` VARCHAR(191) NULL,
    `installmentAnticipationQty` DECIMAL(65, 30) NULL,
    `vehicleQty` DECIMAL(65, 30) NULL,
    `installmentAmount` DECIMAL(65, 30) NULL,
    `deliveryPrice` DECIMAL(65, 30) NULL,
    `incomeProofURL` VARCHAR(191) NULL,
    `addressProofURL` VARCHAR(191) NULL,
    `addtionalDocumentsURL` VARCHAR(191) NULL,
    `previousYearBalanceURL` VARCHAR(191) NULL,
    `currentYearBalanceURL` VARCHAR(191) NULL,
    `previousYearIncomeStatementURL` VARCHAR(191) NULL,
    `currentYearIncomeStatementURL` VARCHAR(191) NULL,
    `signedRegistrationFormURL` VARCHAR(191) NULL,
    `rentalAgencyId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `expectedContractMonths` INTEGER NULL,
    `proposalId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HealthIndication` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `quotationForCnpj` VARCHAR(191) NULL,
    `agesAndRelationship` VARCHAR(191) NULL,
    `serviceRegion` VARCHAR(191) NULL,
    `hasHealthPlan` VARCHAR(191) NULL,
    `currentPlanName` VARCHAR(191) NULL,
    `currentPlanMonthlyCost` VARCHAR(191) NULL,
    `planLevel` VARCHAR(191) NULL,
    `wardApartmentHasCopar` VARCHAR(191) NULL,
    `status_rd` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `HealthIndication_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleBrand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `vehicleBrandId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleVersion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `year` VARCHAR(191) NULL,
    `imageURL` VARCHAR(191) NULL,
    `vehicleModelId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleOffer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `term` VARCHAR(191) NULL,
    `km` VARCHAR(191) NULL,
    `personType` ENUM('PF', 'PJ', 'PF_PJ') NOT NULL,
    `price` DECIMAL(65, 30) NULL,
    `discountedPrice` DECIMAL(65, 30) NULL,
    `rentalAgencyId` INTEGER NOT NULL,
    `vehicleVersionId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_companieId_fkey` FOREIGN KEY (`companieId`) REFERENCES `Companie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_companieId_fkey` FOREIGN KEY (`companieId`) REFERENCES `Companie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPasscode` ADD CONSTRAINT `UserPasscode_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_companieId_fkey` FOREIGN KEY (`companieId`) REFERENCES `Companie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_rentalAgencyId_fkey` FOREIGN KEY (`rentalAgencyId`) REFERENCES `RentalAgency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_proposalId_fkey` FOREIGN KEY (`proposalId`) REFERENCES `Proposal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthIndication` ADD CONSTRAINT `HealthIndication_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModel` ADD CONSTRAINT `VehicleModel_vehicleBrandId_fkey` FOREIGN KEY (`vehicleBrandId`) REFERENCES `VehicleBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleVersion` ADD CONSTRAINT `VehicleVersion_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleOffer` ADD CONSTRAINT `VehicleOffer_rentalAgencyId_fkey` FOREIGN KEY (`rentalAgencyId`) REFERENCES `RentalAgency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleOffer` ADD CONSTRAINT `VehicleOffer_vehicleVersionId_fkey` FOREIGN KEY (`vehicleVersionId`) REFERENCES `VehicleVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
