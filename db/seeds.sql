INSERT INTO departments (name)
VALUES 
    ('Engineering'),
    ('Marketing'),
    ('Finance'),
    ('Sales'),
    ('Legal');

SELECT * FROM departments;

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Software engineer", 120000, 1),
    ("Engineering manager", 225000, 1),
    ("Accountant", 70000, 2),
    ("Accounting manager", 120000, 2),
    ("Product marketing manager", 50000, 3),
    ("Sales rep", 85000, 4);

SELECT * FROM role;



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Pamela', 'James', 1, NULL),
( 'Tommy', 'Strong', 3, 2),
( 'Gina', 'Waters', 1, 1),
( 'Kelolo', 'Jones', 1, 2),
( 'Martin', 'Pain', 2, 2);

SELECT * FROM employee;