SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT=0;
START TRANSACTION;
SET time_zone="+07:00";

CREATE DATABASE IF NOT EXISTS `db_assessment` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;

USE `db_assessment`;

CREATE TABLE `tb_account`(
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `zipCode` varchar(10) NOT NULL,
  `state` VARCHAR(2) NOT NULL
) ENGINE InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_account` ADD PRIMARY KEY (`id`);

ALTER TABLE `tb_account`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

GRANT ALL PRIVILEGES ON `db_assessment`.* TO `wave`@`localhost`;

COMMIT;
