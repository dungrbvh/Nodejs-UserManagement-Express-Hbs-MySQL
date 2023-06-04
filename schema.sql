CREATE TABLE `healthapp`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL , `email` VARCHAR(45) NOT NULL , `phone` VARCHAR(45) NOT NULL , `comments` TEXT NOT NULL , `status` VARCHAR(10) NOT NULL DEFAULT 'active', `created_date` DATE NOT NULL, `timestamp` TIMESTAMP, PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `healthapp`.`diet` (`diet_id` INT NOT NULL AUTO_INCREMENT, `user_id` INT NOT NULL, `food_name` VARCHAR(20) NOT NULL  ,`type` VARCHAR(10) NOT NULL, `add_date` DATETIME NOT NULL, `timestamp` TIMESTAMP, PRIMARY KEY (`diet_id`) );
CREATE TABLE `healthapp`.`activity` (`activity_id` INT NOT NULL AUTO_INCREMENT, `user_id` INT NOT NULL, `duration` INT,`status` VARCHAR(10),`type` VARCHAR(10),`activity` VARCHAR(40) NOT NULL, `calories` VARCHAR(20),`comments` VARCHAR(100), `add_date` DATE NOT NULL, `timestamp` TIMESTAMP, PRIMARY KEY (`activity_id`));
CREATE TABLE `healthapp`.`body_records` (`record_id` INT NOT NULL AUTO_INCREMENT, `user_id` INT NOT NULL, `health_rate` INT, `weight` INT, `date` DATE NOT NULL, PRIMARY KEY (`record_id`));
CREATE TABLE `healthapp`.`public_info` (`id` INT NOT NULL AUTO_INCREMENT, `type` VARCHAR(20) DEFAULT 'common', `description` VARCHAR(100),`add_date` DATETIME, `timestamp` TIMESTAMP, PRIMARY KEY (`id`));
CREATE TABLE `healthapp`.`diary` (`diary_id` INT NOT NULL AUTO_INCREMENT, `user_id` INT NOT NULL,`text` VARCHAR(200), `add_date` DATETIME NOT NULL, `timestamp` TIMESTAMP, PRIMARY KEY (`diary_id`));