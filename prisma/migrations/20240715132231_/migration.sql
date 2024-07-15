/*
  Warnings:

  - You are about to drop the column `boundingBox` on the `Configuration` table. All the data in the column will be lost.
  - You are about to drop the column `cells` on the `Configuration` table. All the data in the column will be lost.
  - You are about to drop the column `period` on the `Configuration` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Configuration` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Pattern` table. All the data in the column will be lost.
  - Added the required column `description` to the `Configuration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boundingBox` to the `Pattern` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cells` to the `Pattern` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `Pattern` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Pattern` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Configuration` DROP COLUMN `boundingBox`,
    DROP COLUMN `cells`,
    DROP COLUMN `period`,
    DROP COLUMN `speed`,
    ADD COLUMN `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Pattern` DROP COLUMN `description`,
    ADD COLUMN `boundingBox` VARCHAR(191) NOT NULL,
    ADD COLUMN `cells` INTEGER NOT NULL,
    ADD COLUMN `period` INTEGER NOT NULL,
    ADD COLUMN `speed` INTEGER NOT NULL;
