DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- CREATE TABLE role (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(25) UNIQUE NOT NULL,
--   salary DECIMAL NOT NULL,
--   department_id INT NOT NULL
-- );

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);