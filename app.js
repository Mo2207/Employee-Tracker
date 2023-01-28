
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'mysql1042',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

function startApplication() {
  inquirer
    .prompt([

    ])
    .then((data) => {
      
    })
}

startApplication();
