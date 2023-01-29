
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  role_id INT PRIMARY KEY AUTO_INCREMENT,
  role_title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL, 
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  employee_first_name VARCHAR(30) NOT NULL,
  employee_last_name VARCHAR(30) NOT NULL,
  role_title VARCHAR(30) NOT NULL,
  employee_manager VARCHAR(30)
);