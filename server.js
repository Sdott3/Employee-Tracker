const inquirer = require("inquirer");
const db = require("./db/connection");
const Table = require("console.table");

//DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptUser();
});

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
            "Update Employee Role",
            "Delete Role",
            "Exit"
            ]
        } 
    ])

    .then((selection) => {
        const { menuSelect } = selection;
        if (menuSelect === "View All Employees") {
          viewEmployees();
        }
        if (menuSelect === "View All Departments") {
          viewDepartments();
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
        if (menuSelect === "Update Employee Role") {
            updateRole();
        }
        if (menuSelect === "Delete Role") {
            deleteRole();
        }
        if (menuSelect === "Exit") {
            console.log("Thank You. Start the app over to use again.");
        }
    });
};