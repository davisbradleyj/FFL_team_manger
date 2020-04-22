### Schema

CREATE DATABASE team_db;
USE team_db;

CREATE TABLE players(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(255) NOT NULL,
position varchar(255) NOT NULL,
starting BOOLEAN DEFAULT false
);
INSERT INTO players (name, position, starting) VALUES ('Matt Ryan','QB',true);
INSERT INTO players (name, position) VALUES ('Tom Brady','QB');
INSERT INTO players (name, position, starting) VALUES ('Zeke Elliott','RB',true);
INSERT INTO players (name, position, starting) VALUES ('Christian McCaffery','RB',true);
INSERT INTO players (name, position) VALUES ('Austin Ekeler','RB');
INSERT INTO players (name, position, starting) VALUES ('Julio Jones','WR',true);
INSERT INTO players (name, position, starting) VALUES ('Chris Godwin','WR',true);
INSERT INTO players (name, position) VALUES ('Kenny Golladay','WR');
INSERT INTO players (name, position, starting) VALUES ('George Kittle','TE',true);
