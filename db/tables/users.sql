/* Use Database */
USE test;
/* Use Database */

/* 'Users' */
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/* 'Users' */

/* Stored Procedures */

/* List Users */
DELIMITER $$
CREATE PROCEDURE listUsers()
BEGIN
  SELECT * FROM Users;
END$$
DELIMITER ;
/* List Users */

/* Get User By ID */
DELIMITER $$
CREATE PROCEDURE getUserByID(
  IN id INT
)
BEGIN
  SELECT * FROM Users WHERE id = Users.id;
END$$
DELIMITER ;
/* Get User By ID */

/* Insert User */
DELIMITER $$
CREATE PROCEDURE insertUser(
  IN name VARCHAR(255),
  IN lastname VARCHAR(255),
  IN username VARCHAR(255),
  IN password VARCHAR(255),
  IN email VARCHAR(255)
)
BEGIN
  INSERT INTO Users (name, lastname, username, password, email) VALUES (name, lastname, username, password, email);
END$$
DELIMITER ;
/* Insert User */

/* Delete User By ID */
DELIMITER $$
CREATE PROCEDURE deleteUserByID(
  IN id INT
)
BEGIN
  DELETE FROM Users WHERE id = Users.id;
END$$
DELIMITER ;
/* Delete User By ID */

/* Update User By ID */
DELIMITER $$
CREATE PROCEDURE updateUserByID(
  IN id INT,
  IN name VARCHAR(255),
  IN lastname VARCHAR(255),
  IN username VARCHAR(255),
  IN password VARCHAR(255),
  IN email VARCHAR(255)
)
BEGIN
  UPDATE Users SET name = name, lastname = lastname, username = username, password = password, email = email WHERE id = Users.id;
END$$
DELIMITER ;
/* Update User By ID */