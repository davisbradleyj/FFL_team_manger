### Schema

CREATE DATABASE taqueria_db;
USE taqueria_db;

CREATE TABLE tacos(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
filling varchar(255) NOT NULL,
cost decimal (10,2) NOT NULL,
ordered BOOLEAN DEFAULT false
);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Carnitas',3,false);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Carne Asada',3,false);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Pollo Asado',3,false);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Al Pastor',3,false);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Barbacoa',3,false);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Camarones',3,false);
INSERT INTO tacos (filling, cost, ordered) VALUES ('Chorizo',3,false);


