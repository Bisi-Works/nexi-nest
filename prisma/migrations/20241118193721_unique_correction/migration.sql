/*
  Warnings:

  - A unique constraint covering the columns `[proposalId]` on the table `Contract` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Contract_proposalId_key` ON `Contract`(`proposalId`);
