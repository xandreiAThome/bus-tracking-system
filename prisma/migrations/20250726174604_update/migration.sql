-- CreateTable
CREATE TABLE `baggage_ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sender_no` VARCHAR(20) NULL,
    `dispatcher_no` VARCHAR(20) NULL,
    `sender_name` VARCHAR(100) NULL,
    `receiver_name` VARCHAR(100) NULL,
    `item` VARCHAR(255) NOT NULL,
    `ticket_id` INTEGER NOT NULL,

    INDEX `fk_baggage_ticket_ticket1_idx`(`ticket_id`),
    INDEX `fk_seat_bus1_idx`(`dispatcher_no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plate_number` VARCHAR(8) NOT NULL,
    `capacity` INTEGER NOT NULL,
    `station_id` INTEGER NOT NULL,

    INDEX `fk_bus_station1_idx`(`station_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cashier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shift_start` TIMESTAMP(0) NULL,
    `shift_end` TIMESTAMP(0) NULL,
    `station_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,

    INDEX `fk_cashier_station1_idx`(`station_id`),
    INDEX `fk_cashier_user1_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `fk_driver_user1_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `passenger_ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `passenger_name` VARCHAR(100) NULL,
    `discount` ENUM('student', 'pwd', 'senior') NULL,
    `ticket_id` INTEGER NOT NULL,

    INDEX `fk_passenger_ticket_ticket1_idx`(`ticket_id`),
    INDEX `fk_seat_bus1_idx`(`passenger_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seat_number` VARCHAR(5) NOT NULL,
    `bus_id` INTEGER NOT NULL,

    INDEX `fk_seat_bus1_idx`(`bus_id`),
    UNIQUE INDEX `unique_bus_order`(`bus_id`, `seat_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `station` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `station_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DECIMAL(6, 2) NOT NULL,
    `trip_id` INTEGER NOT NULL,
    `cashier_id` INTEGER NOT NULL,
    `ticket_type` ENUM('passenger', 'baggage') NOT NULL,

    INDEX `fk_ticket_cashier1_idx`(`cashier_id`),
    INDEX `fk_ticket_trip1_idx`(`trip_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `start_time` TIMESTAMP(0) NULL,
    `end_time` TIMESTAMP(0) NULL,
    `dest_station_id` INTEGER NOT NULL,
    `src_station_id` INTEGER NOT NULL,
    `bus_id` INTEGER NOT NULL,
    `driver_id` INTEGER NOT NULL,
    `status` ENUM('boarding', 'transit', 'complete') NULL,

    INDEX `fk_trip_bus1_idx`(`bus_id`),
    INDEX `fk_trip_driver1_idx`(`driver_id`),
    INDEX `fk_trip_station1_idx`(`dest_station_id`),
    INDEX `fk_trip_station2_idx`(`src_station_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `email` VARCHAR(150) NOT NULL,
    `image` VARCHAR(255) NULL,
    `role` ENUM('user', 'admin', 'cashier', 'driver') NOT NULL DEFAULT 'user',

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `baggage_ticket` ADD CONSTRAINT `fk_baggage_ticket_ticket1` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bus` ADD CONSTRAINT `fk_bus_station1` FOREIGN KEY (`station_id`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cashier` ADD CONSTRAINT `fk_cashier_station1` FOREIGN KEY (`station_id`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cashier` ADD CONSTRAINT `fk_cashier_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `fk_driver_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `passenger_ticket` ADD CONSTRAINT `fk_passenger_ticket_ticket1` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `seat` ADD CONSTRAINT `fk_seat_bus1` FOREIGN KEY (`bus_id`) REFERENCES `bus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `fk_ticket_cashier1` FOREIGN KEY (`cashier_id`) REFERENCES `cashier`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `fk_ticket_trip1` FOREIGN KEY (`trip_id`) REFERENCES `trip`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `fk_trip_bus1` FOREIGN KEY (`bus_id`) REFERENCES `bus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `fk_trip_driver1` FOREIGN KEY (`driver_id`) REFERENCES `driver`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `fk_trip_station1` FOREIGN KEY (`dest_station_id`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `fk_trip_station2` FOREIGN KEY (`src_station_id`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
