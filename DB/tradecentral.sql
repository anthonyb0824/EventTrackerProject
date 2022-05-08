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
-- Table `trade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trade` ;

CREATE TABLE IF NOT EXISTS `trade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` TINYINT NOT NULL,
  `shares` DOUBLE NOT NULL,
  `price_per_share` INT NOT NULL,
  `description` VARCHAR(1000) NULL,
  `profit_and_loss` DOUBLE NULL,
  PRIMARY KEY (`id`))
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
-- Data for table `trade`
-- -----------------------------------------------------
START TRANSACTION;
USE `tradecentraldb`;
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (1, 0, 10, 100, 'Closed posistion; took a mad L', - 20);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (2, 1, 15, 10 , 'Open position; sell in one year', 8);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (3, 0, 100, 5, 'Good trade', 10);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (4, 1, 1000, 17, 'soild gain', 15);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (5, 0, 500, 24, 'little loss', -10 );
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (6, 1, 10000, 56, 'NICE!', 50);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (7, 0, 50000, 110, 'Heard about this trade on the internet; YOLOd my lifes saving; did not pay off', -2000);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (8, 1, 2000, 1143, NULL, 7);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (9, 0, 200, 235, NULL, 5);
INSERT INTO `trade` (`id`, `status`, `shares`, `price_per_share`, `description`, `profit_and_loss`) VALUES (10, 1, 765, 340, NULL, 9);

COMMIT;

