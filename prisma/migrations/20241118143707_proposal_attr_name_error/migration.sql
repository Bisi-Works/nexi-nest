/*
  Warnings:

  - You are about to drop the column `additionarCar` on the `proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `proposal` DROP COLUMN `additionarCar`,
    ADD COLUMN `additionalCar` BOOLEAN NULL;
