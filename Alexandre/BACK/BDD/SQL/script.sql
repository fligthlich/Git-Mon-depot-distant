/************************************************Mise en place base de données**********************************************/
CREATE DATABASE IF NOT EXISTS `hotel`;
USE hotel;
CREATE TABLE `station`(
    `num_station` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nom_station` VARCHAR(50) NOT NULL
);

CREATE TABLE `hotel`(
    `num_hotel` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `categorie_hotel` TINYINT(2) UNSIGNED NOT NULL,
    `nom_hotel` VARCHAR(50) NOT NULL,
    `adresse_hotel` VARCHAR(50) NOT NULL,
    `num_station` INT NOT NULL,
    FOREIGN KEY (`num_station`) REFERENCES `station`(`num_station`)
);


CREATE TABLE `client`(
    `num_client` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `adresse_client` SMALLINT(4) NOT NULL,
    `nom_client` VARCHAR(50) NOT NULL,
    `prenom_client` VARCHAR(50) NOT NULL
);

CREATE TABLE `chambre`(
    `num_chambre` SMALLINT(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `capacite_chambre` TINYINT(3) NOT NULL,
    `degres_confort` TINYINT(3) NOT NULL,
    `exposition` VARCHAR(20) NOT NULL,
    `type_chambre` VARCHAR(20) NOT NULL,
    `num_hotel` INT NOT NULL,
    FOREIGN KEY(`num_hotel`) REFERENCES `hotel`(`num_hotel`)
);



CREATE TABLE `reservation`(
    `num_chambre` SMALLINT(4) NOT NULL,
    `num_client` INT NOT NULL,
    `date_debut` DATE,
    `date_fin` DATE,
    `date_reservation` DATETIME,
    `montant_arrhes` INT NOT NULL,
    `prix_total` INT NOT NULL,
    FOREIGN KEY(`num_chambre`) REFERENCES `chambre`(`num_chambre`),
    FOREIGN KEY(`num_client`) REFERENCES `client`(`num_client`)
);

/***************************************************************Gestion des utilisateurs*********************************************/

