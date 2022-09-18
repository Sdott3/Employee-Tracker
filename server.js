const inquirer = require("inquirer");
const db = require("./db/connection");



//DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptUser();
});

// prompt for user choices
const userPrompt = () => {
    return inquirer.userPrompt ([
    {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
            "View All Employee",
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
        ]
    }
]).then((selection) => {
    const { menuSelect } = selection;
    if (menuSelect === "Vie")
})


           