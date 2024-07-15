/*
  Warnings:

  - You are about to drop the column `patternId` on the `Configuration` table. All the data in the column will be lost.
  - Added the required column `configurationId` to the `Pattern` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Configuration` DROP FOREIGN KEY `Configuration_patternId_fkey`;

-- AlterTable
ALTER TABLE `Configuration` DROP COLUMN `patternId`;

-- AlterTable
ALTER TABLE `Pattern` ADD COLUMN `configurationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Pattern` ADD CONSTRAINT `Pattern_configurationId_fkey` FOREIGN KEY (`configurationId`) REFERENCES `Configuration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
