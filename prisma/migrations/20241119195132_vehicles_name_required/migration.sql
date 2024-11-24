/*
  Warnings:

  - Made the column `name` on table `vehiclebrand` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `vehiclemodel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `vehicleversion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `vehiclebrand` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vehiclemodel` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vehicleversion` MODIFY `name` VARCHAR(191) NOT NULL;
