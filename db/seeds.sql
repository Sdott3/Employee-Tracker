-- INSERT INTO role (title, salary, department_id)
-- VALUES ("software engineer", 120000, 1),
--     ("engineering manager", 225000, 1),
--     ("accountant", 70000, 2),
--     ("accounting manager", 120000, 2),
--     ("product marketing manager", 50000, 3),
--     ("sales rep", 85000, 4);





INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Pamela', 'James', 1, NULL),
( 'Tommy', 'Strong', 3, 2),
( 'Gina', 'Waters', 1, 1),
( 'Kelolo', 'Jones', 1, 2),
( 'Martin', 'Pain', 2, 2);

SELECT * FROM employee;