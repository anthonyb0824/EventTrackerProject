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
  `price` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  `profit_and_lose` DOUBLE NULL,
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
INSERT INTO `trade` (`id`, `status`, `shares`, `price`, `description`, `profit_and_lose`) VALUES (1, True, 10, 100, NULL, 20);
INSERT INTO `trade` (`id`, `status`, `shares`, `price`, `description`, `profit_and_lose`) VALUES (2, False, 15, 10 , 'Open position; sell in one year', 8);

COMMIT;

