/*
  Warnings:

  - A unique constraint covering the columns `[ticket_id]` on the table `baggage_ticket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ticket_id]` on the table `passenger_ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `seat` ADD COLUMN `status` ENUM('available', 'occupied') NOT NULL DEFAULT 'available';

-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- CreateIndex
CREATE UNIQUE INDEX `ticket_id_UNIQUE` ON `baggage_ticket`(`ticket_id`);

-- CreateIndex
CREATE UNIQUE INDEX `ticket_id_UNIQUE` ON `passenger_ticket`(`ticket_id`);
