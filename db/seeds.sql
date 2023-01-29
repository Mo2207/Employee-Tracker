
INSERT INTO departments (department_name)
VALUES 
("SALES"),
("ENGINEERING"),
("FINANCE"),
("LEGAL");

INSERT INTO roles (role_title, salary, department_id)
VALUES 
("SALES LEAD", 80000.00, 1),
("SALES PERSON", 50000.00, 1),
("LEAD ENGINEER", 100000.00, 2),
("ENGINEER", 70000.00, 2),
("JUNIOR ENGINEER", 60000.00, 2),
("LEAD ACCOUNTANT", 70000.00, 3),
("ACCOUNTANT", 50000.00, 3),
("LEGAL TEAM LEAD", 100000.00,4),
("LAWYER", 80000.00, 4);

INSERT INTO employees (employee_first_name, employee_last_name, role_title, employee_manager)
VALUES 
("JOHN", "DOE", "LEAD ENGINEER", NULL),
("GABE", "MORRIS", "JUNIOR ENGINEER", "JOHN DOE"),
("TIM", "SMITH", "ACCOUNTANT", "GEOFF SMITH"),
("HANNAH", "JACKSON", "LEGAL TEAM LEAD", NULL),
("BOBBY", "SMITH", "LAWYER", "HANNAH JACKSON"),
("AVA", "DOE", "ENGINEER", "JOHN DOE");