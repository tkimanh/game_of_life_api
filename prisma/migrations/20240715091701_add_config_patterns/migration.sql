-- CreateTable
CREATE TABLE `Pattern` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pattern_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Configuration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `boundingBox` VARCHAR(191) NOT NULL,
    `cells` INTEGER NOT NULL,
    `period` INTEGER NOT NULL,
    `speed` INTEGER NOT NULL,
    `patternId` INTEGER NOT NULL,

    UNIQUE INDEX `Configuration_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Configuration` ADD CONSTRAINT `Configuration_patternId_fkey` FOREIGN KEY (`patternId`) REFERENCES `Pattern`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
