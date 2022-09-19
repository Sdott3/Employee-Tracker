const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");

// Connection to lib files ???
const Department = require('./lib/Department.js');
const Employee = require('./lib/Employee.js');
const Role = require('./lib/Role.js');


//DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    userPrompt();
});



// having problem connecting
connection.connect();
init(userPrompt);
  
// prompt for user choices
const userPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "action",
                choices: [
                    "View All Employees",
                    "View All Departments",
                    "View All Roles",
                    "Add Employee",
                    "Add Department",
                    "Add Role",
                    "Update Role",
                    "Delete Employees",
                    "Delete Departments",
                    "Delete Role",
                    "Exit"
                ],
            }
        ])
        .then((selection) => {
        const { menuSelect } = selection;
        if (menuSelect === "View All Employees") {
            viewEmployees();
        }
        if (menuSelect === "View All Departments") {
            viewDepartment();
        }
        if (menuSelect === "View All Roles") {
            viewRoles();
        }
        if (menuSelect === "Add Employee") {
            addEmployee();
        }
        if (menuSelect === "Add Department") {
            addDepartment();
        }
        if (menuSelect === "Add Role") {
            addRole();
        }
        if (menuSelect === "Delete Employee") {
            deleteEmployee();
        }
        if (menuSelect === "Delete Employee") {
            deleteEmployee();
        }
        if (menuSelect === "Exit") {
            console.log("Thank you. Start app to use again.");
        }

    });
}

// view all employees

viewEmployees = () => {
    console.log("List of Employees ");
    const query = `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, roles.salary AS salary, roles.department_id, employees.manager_id
                   FROM employees
                   LEFT JOIN roles ON employees.role_id = roles.id`;
    db.query(query, (err, res) => {
        console.table(res);
        userPrompt();
    });
};

// view all departments
viewDepartment = () => {
    console.log("List of Departments");
    const query = `SELECT * FROM departments`;
    db.query(query, (err, res) => {
      console.table(res);
      userPrompt();
    });
};

// view all roles 
viewRoles= () => {
    console.log("List of Roles");
    const query = `SELECT roles * departments.name AS department
                    FROM role
                    LEFT JOIN departments ON roles.department_id = departments.id`;
    db.query(query, (err, res) => {
      console.table(res);
      userPrompt();
    });
};


// "Add Employee",

addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first",
          message: "Enter employee's first name",
          validate: (addFirst) => {
            if (addFirst) {
              return true;
            } else {
              console.log("Please enter employee's first name");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "last",
          message: "Enter employee's last name",
          validate: (addLast) => {
            if (addLast) {
              return true;
            } else {
              console.log("Please enter employee's first name");
              return false;
            }
          },
        },
      ])
      .then((answer) => {
        const params = [answer.first, answer.last];
  
        const getRoles = `SELECT roles.id, roles.title FROM roles`;
  
        db.query(getRoles, (err, data) => {
          if (err) throw err;
  
          const roles = data.map(({ id, title }) => ({ name: title, value: id }));
  
          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "What is the employee's job title?",
                choices: roles,
              },
            ])
            .then((roleChoice) => {
              const role = roleChoice.role;
              params.push(role);
  
              const sqlMan = `SELECT * FROM employees`;
  
              db.query(sqlMan, (err, data) => {
                if (err) throw err;
  
                const managers = data.map(({ id, first_name, last_name }) => ({
                  name: first_name + " " + last_name,
                  value: id,
                }));
  
                managers.push({ name: "None", value: 0 });
                console.log(managers);
  
                inquirer
                  .prompt([
                    {
                      type: "list",
                      name: "manager",
                      message: "Who is the employee's manager?",
                      choices: managers,
                    },
                  ])
                  .then((managerChoice) => {
                    if (managerChoice.manager !== 0) {
                      const manager = managerChoice.manager;
                      params.push(manager);
                      const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                                       VALUES (?, ?, ?, ?)`;
  
                      db.query(sql, params, (err, result) => {
                        if (err) throw err;
                        console.log("Employee has been added");
                        viewEmployees();
                      });
                    } else {
                      const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                          VALUES (?, ?, ?, ?)`;
  
                      db.query(sql, params, (err, res) => {
                        if (err) throw err;
                        console.log("Employee has been added");
                        viewEmployees();
                      });
                    }
                  });
              });
            });
        });
    });
};

//  "Add Department",
addDepartment = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "newDept",
          message: "What department would you like to add?",
          validate: (addDept) => {
            if (addDept) {
              return true;
            } else {
              console.log("Please enter a new department name");
              return false;
            }
          },
        },
      ])
      .then((selection) => {
        const sql = `INSERT INTO departments (name)
                       VALUES (?)`;
  
        db.query(sql, selection.newDept, (err, res) => {
          if (err) throw err;
          console.log("Added " + selection.newDept + "to departments list");
  
          viewDepartment();
        });
    });
};

//  "Add Role",
addRole = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "role",
          message: "What role would you like to add?",
          validate: (addRole) => {
            if (addRole) {
              return true;
            } else {
              console.log("Please enter a new role");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of this role?",
          validate: (addSalary) => {
            if (addSalary) {
              return true;
            } else {
              console.log("Please enter a salary for this role");
              return false;
            }
          },
        },
      ])
      .then((selection) => {
        const params = [selection.role, selection.salary];
        const sqlRole = `SELECT name, id FROM departments`;
  
        db.query(sqlRole, (err, data) => {
          if (err) throw err;
  
          const dept = data.map(({ name, id }) => ({ name: name, value: id }));
  
          inquirer
            .prompt([
              {
                type: "list",
                name: "dept",
                message: "What department is this role in?",
                choices: dept,
              },
            ])
            .then((deptChoice) => {
              const dept = deptChoice.dept;
              params.push(dept);
  
              const sql = `INSERT INTO roles (title, salary, department_id)
                           VALUES (?, ?, ?)`;
  
              db.query(sql, params, (err, res) => {
                if (err) throw err;
                viewRoles();
              });
            });
        });
    });
};

//  "Update Role",
updateRole = () => {
    const getEmployeeSql = `SELECT * from employees`;
    db.query(getEmployeeSql, (err, result) => {
      if (err) throw err;
      const employees = result.map(({ id, first_name, last_name }) => ({
        name: first_name + " " + last_name,
        value: id,
      }));
  
      inquirer
        .prompt([
          {
            type: "list",
            name: "name",
            message: "Which employee's role would you like to update?",
            choices: employees,
          },
        ])
        .then((choice) => {
          const employee = choice.name;
          var params = [employee];
  
          const getRoleSql = `SELECT * FROM roles`;
          db.query(getRoleSql, (err, result) => {
            if (err) throw err;
            const roles = result.map(({ id, title }) => ({
              name: title,
              value: id,
            }));
  
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "role",
                  message: "What is the employee's new role?",
                  choices: roles,
                },
              ])
              .then((choice) => {
                const role = choice.role;
                params.push(role);
                params = params.reverse();
                const updateSql = "UPDATE employees SET role_id = ? WHERE id = ?";
                db.query(updateSql, params, (err, res) => {
                  if (err) throw err;
                  console.log("Employee role updated");
                  viewEmployees();
                });
              });
          });
        });
    });
};
  

//  "Delete Employees",
//  "Delete Departments",
//  "Delete Role",


//  "Exit"

