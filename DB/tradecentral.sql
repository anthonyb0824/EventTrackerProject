-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tradecentraldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tradecentraldb` ;

-- -----------------------------------------------------
-- Schema tradecentraldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tradecentraldb` DEFAULT CHARACTER SET utf8 ;
USE `tradecentraldb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(200) NULL,
  `email` VARCHAR(45) NULL,
  `phone_number` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trade` ;

CREATE TABLE IF NOT EXISTS `trade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(6) NOT NULL,
  `shares` DOUBLE NOT NULL,
  `price_per_share` INT NOT NULL,
  `description` VARCHAR(1000) NULL,
  `profit_and_loss` DOUBLE NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_trade_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_trade_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS admin@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'admin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `tradecentraldb`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `phone_number`, `role`) VALUES (1, 'Anthony ', 'Butler', 'AB1216', 'ab1216', 'ab@gmail.com', '817-909-8888', 'admin');

COMMIT;


-- -----------------------------------------------------
-- Data for table `trade`
-- -----------------------------------------------------
START TRANSACTION;
USE `tradecentraldb`;
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (1, 'open', 10, 100, 'Closed posistion; took a mad L', - 20, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (2, 'closed', 15, 10 , 'Open position; sell in one year', 8, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (3, 'open', 100, 5, 'Good trade', 10, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (4, 'closed', 1000, 17, 'soild gain', 15, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (5, 'open', 500, 24, 'little loss', -10 , 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (6, 'closed', 10000, 56, 'NICE!', 50, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (7, 'open', 50000, 110, 'Heard about this trade on the internet; YOLOd my lifes saving; did not pay off', -2000, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (8, 'closed', 2000, 1143, NULL, 7, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (9, 'open', 200, 235, NULL, 5, 1);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`, `user_id`) VALUES (10, 'closed', 765, 340, NULL, 9, 1);

COMMIT;

