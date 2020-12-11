/*******************************LOT 1******************************/
--Afficher la liste des hôtels. Le résultat doit faire apparaître le nom de l’hôtel et la ville
SELECT hot_nom, hot_ville
FROM `hotel`;

--Afficher la ville de résidence de Mr White Le résultat doit faire apparaître le nom, le prénom, et l'adresse du client
SELECT cli_nom, cli_prenom, cli_ville
FROM `client`
WHERE cli_nom = 'white';

--Afficher la liste des stations dont l’altitude < 1000 Le résultat doit faire apparaître le nom de la station et l'altitude
SELECT sta_nom, sta_altitude
FROM station
WHERE sta_altitude < 1000;

--Afficher la liste des chambres ayant une capacité > 1 Le résultat doit faire apparaître le numéro de la chambre ainsi que la capacité
SELECT cha_numero AS 'numéro de chambre', cha_capacite AS 'capacité chambre'
FROM chambre
WHERE cha_capacite > 1;

--Afficher les clients n’habitant pas à Londre Le résultat doit faire apparaître le nom du client et la ville
SELECT cli_nom, cli_ville
FROM `client`
WHERE cli_ville != 'Londre';

--Afficher la liste des hôtels située sur la ville de Bretou et possédant une catégorie>3 Le résultat doit faire apparaître le nom de l'hôtel, ville et la catégorie
SELECT hot_nom, hot_ville, hot_categorie
FROM hotel
WHERE hot_ville = 'Bretou' AND hot_categorie > 3;

/**********************************LOT 2**********************************/
--Afficher la liste des hôtels avec leur station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, la catégorie, la ville
SELECT sta_nom AS 'Nom de la station', hot_nom AS 'Nom Hotel', hot_categorie AS 'Catégorie Hotel', hot_ville AS 'Ville Hotel'
FROM station
INNER JOIN hotel
ON hotel.hot_sta_id = station.sta_id ;


--Afficher la liste des chambres et leur hôtel Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre
SELECT hot_nom AS 'Nom Hotel', hot_categorie AS 'Catégorie Hotel', hot_ville AS 'Ville Hotel', cha_numero AS 'Numéro chambre'
FROM hotel
INNER JOIN chambre
ON hotel.hot_id = chambre.cha_hot_id;

--Afficher la liste des chambres de plus d'une place dans des hôtels situés sur la ville de Bretou Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre et sa capacité
SELECT hot_nom AS 'Nom Hotel', hot_categorie AS 'Catégorie Hotel', hot_ville AS 'Ville Hotel', cha_numero AS 'Numéro chambre', cha_capacite AS 'Capacité chambre'
FROM hotel
INNER JOIN chambre
ON hotel.hot_id = chambre.cha_hot_id
WHERE cha_capacite > 1 AND hot_ville = 'Bretou';

--Afficher la liste des réservations avec le nom des clients Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de réservation
SELECT cli_nom AS 'Client', hot_nom AS 'Nom Hotel', res_date AS 'Date de réservation'
FROM `client`
JOIN hotel
ON hot_id
JOIN reservation 
ON cli_id;

--Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, le numéro de la chambre et sa capacité
SELECT cli_nom AS 'Nom client', hot_nom AS 'Nom Hotel', res_date AS 'Date réservation'
FROM client 
INNER JOIN reservation
ON client.cli_id = reservation.res_cli_id
INNER JOIN chambre
ON reservation.res_cha_id = chambre.cha_id
INNER JOIN hotel 
ON chambre.cha_id = hotel.hot_id;

--Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, le numéro de la chambre et sa capacité
SELECT sta_nom AS 'Nom station', hot_nom AS 'Nom Hotel', cha_numero AS 'Numéro chambre', cha_capacite AS 'Capacité Chambre'
FROM station 
INNER JOIN hotel
ON station.sta_id = hotel.hot_sta_id
INNER JOIN chambre
ON hotel.hot_id = chambre.cha_hot_id;

--Afficher les réservations avec le nom du client et le nom de l’hôtel AVEC datediff Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de début du séjour et la durée du séjour
SELECT cli_nom AS 'Nom Client', hot_nom AS 'Nom Hotel', res_date_debut AS 'Date début séjour', DATEDIFF(res_date_fin,res_date_debut) AS 'Durée séjour'
FROM client 
INNER JOIN reservation 
ON client.cli_id = reservation.res_cli_id
INNER JOIN chambre
ON reservation.res_cha_id = chambre.cha_id
INNER JOIN hotel 
ON chambre.cha_hot_id = hotel.hot_id;

/********************************LOT 3***************************************/
--Compter le nombre d’hôtel par station
SELECT sta_nom AS 'Nom station', COUNT(hot_nom) AS `Nombre d\'hotel par station`
FROM hotel
INNER JOIN station
ON hotel.hot_sta_id = station.sta_id
GROUP BY sta_nom;

--Compter le nombre de chambre par station
SELECT sta_nom AS 'Nom station', COUNT(cha_numero) AS 'Nombre de chambre par station'
FROM chambre
INNER JOIN hotel
ON chambre.cha_hot_id = hotel.hot_id
INNER JOIN station 
ON hotel.hot_sta_id = station.sta_id
GROUP BY sta_nom;

--Compter le nombre de chambre par station ayant une capacité > 1
SELECT sta_nom AS 'Nom station', COUNT(cha_numero) AS 'Nombre de chambre par station'
FROM chambre
INNER JOIN hotel
ON chambre.cha_hot_id = hotel.hot_id
INNER JOIN station 
ON hotel.hot_sta_id = station.sta_id
WHERE cha_capacite > 1
GROUP BY sta_nom;

--Afficher la liste des hôtels pour lesquels Mr Squire a effectué une réservation
SELECT cli_nom, hot_nom
FROM client
INNER JOIN reservation
ON client.cli_id = reservation.res_cli_id
INNER JOIN chambre
ON reservation.res_cha_id = chambre.cha_id
INNER JOIN hotel
ON chambre.cha_hot_id = hotel.hot_id
WHERE cli_nom = 'squire'
GROUP BY hot_nom;

--Afficher la durée moyenne des réservations par station
SELECT sta_nom, AVG(DATEDIFF(res_date_fin,res_date_debut)) AS 'Durée Moyenne du séjour'
FROM client
INNER JOIN reservation
ON client.cli_id = reservation.res_cli_id
INNER JOIN chambre
ON reservation.res_cha_id = chambre.cha_id
INNER JOIN hotel
ON chambre.cha_hot_id = chambre.cha_id
INNER JOIN station
ON hotel.hot_sta_id = station.sta_id
GROUP BY sta_nom;

/*************************************************************************************************************************************************************************/
/**************************************************************************Exercice page suivante*************************************************************************/
--1.Quelles sont les commandes du fournisseur 09120
SELECT fournis.nomfou AS 'Nom du fournisseur', ligcom.numcom AS 'Numéro de commande', libart AS 'Article commandé'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou
WHERE fournis.numfou = 9120;

--ou
SELECT libart AS 'Article commandé par le fournisseur 9120'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou
WHERE fournis.numfou = 9120;

--2.Afficher le code des fournisseurs pour lesquels des commandes ont été passées.
SELECT fournis.numfou AS 'Code fournisseur', libart AS 'Article commandé'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou;

--3.Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés.
SELECT COUNT(ligcom.numlig) AS 'Nombre de commande fournisseur passé', COUNT(DISTINCT fournis.nomfou) AS 'nombre de fournisseur concerné'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou

--4.Editer les produits ayant un stock inférieur ou égal au stock d'alerte et dont la quantité annuelle est inférieur est inférieure à1000 (informations à fournir : n° produit, libelléproduit, stock, stockactuel d'alerte, quantitéannuelle)
SELECT codart AS 'N° Produit', libart AS 'Libellé Article', stkphy AS 'stock', stkale AS 'Stock actuel alerte', qteann AS 'Quantité Annuelle' 
FROM produit 
WHERE stkphy <= stkale AND qteann < 1000;

--5.Quels sont les fournisseurs situés dans les départements 75 78 92 77 ? L’affichage (département, nom fournisseur) sera effectué par département décroissant, puis par ordre alphabétique
SELECT posfou AS 'Département', nomfou AS 'Nom fournisseur'
FROM fournis
WHERE posfou IN ('75014','78250','92200','77')
ORDER BY posfou DESC, nomfou DESC;

--6.Quelles sont les commandes passées au mois de mars et avril?
SELECT fournis.nomfou AS 'Code fournisseur', libart AS 'Article commandé'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou
WHERE EXTRACT(MONTH FROM datcom) IN (3,4);

--Quelles sont les commandes du jourqui ont des observations particulières ?(Affichage numéro de commande, date de commande
SELECT libart AS 'Article commander au mois de mars et Avril'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
WHERE obscom != '';

--Listerle total de chaque commande par total décroissant (Affichage numéro de commande et total)
SELECT ligcom.numcom, SUM(ligcom.qtecde * ligcom.priuni) AS 'Total'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
GROUP BY ligcom.numcom
ORDER BY total DESC;

--9.Lister les commandesdont le total est supérieur à 10000€; on exclura dans le calcul du total les articles commandés en quantité supérieure ou égale à 1000.(Affichage numéro de commande et total)
SELECT ligcom.numcom, SUM(ligcom.qtecde * ligcom.priuni) AS 'Total'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
WHERE ligcom.qtecde >= 1000
GROUP BY ligcom.numcom
HAVING total > 10000
ORDER BY total DESC;

--10.Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le numéro de commande et la date)
SELECT nomfou AS 'Nom fournisseur', ligcom.numcom AS 'Numéro de commande', datcom AS 'Date de commande'
FROM ligcom
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou;

--ou
SELECT DISTINCT nomfou AS 'Nom fournisseur', ligcom.numcom AS 'Numéro de commande', datcom AS 'Date de commande'
FROM ligcom
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou;

--11.Sortir les produits des commandes ayant le mot "urgent' en observation?(Afficher le numéro de commande, le nom du fournisseur, le libellé du produit et le sous total= quantité commandée * Prix unitaire)
SELECT ligcom.numcom AS 'Numéro de commande', nomfou AS 'Nom fournisseur', produit.libart 'Libellé produit', (qtecde * priuni) AS 'Sous total'
FROM produit
INNER JOIN ligcom
ON produit.codart = ligcom.codart
INNER JOIN entcom
ON ligcom.numcom = entcom.numcom
INNER JOIN fournis
ON entcom.numfou = fournis.numfou
WHERE obscom LIKE '%urgent%';

--12.Coder de 2manières différentes la requête suivante:Lister lenom desfournisseurs susceptibles de livrer au moins un article














































