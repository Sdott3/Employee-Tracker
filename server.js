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
const promptUser = () => {
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
            "View All Employees by Department",
            "View All Employees by Role",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Delete Role",
            "Exit"
            ]
       } 
    ]);
};