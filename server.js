const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");

// Connection to lib files ???
const Department = require('./lib/Department.js');
const Employee = require('./lib/Employee.js');
const Role = require('./lib/Role.js');


//DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
//     // userPrompt();
// });


// work on creating a function that calls the prompts that you want. 
// then call that function.
// and within that function the part that you need to require("inquirer")  
// just make a const { funciton that you need to have inquirer for  } = require("inquirer")


// having problem connecting
// connection.connect();
init(userPrompt);
  
// prompt for user choices
const userPrompt = () => {
    return inquirer
    .prompt ([
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
    ]).then((selection) => {
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

};




