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
            viewRole();
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


//  "Add Department",


//  "Add Role",


//  "Update Role",


//  "Delete Employees",


//  "Delete Departments",


//  "Delete Role",


//  "Exit"

