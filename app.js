
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql1042',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

function startApplication() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: ['view all tables', 'view departments table', 'view roles table', 'view employees table', 'add a department', 'add a role', 'add an employee', 'update an employee role']
      }
    ])
    .then((data) => {
      switch (data.toDo) {
        case ('view departments table'):
          db.query('SELECT * FROM departments', function(err, result) {
            if (!err) {
              console.table(result)
            } else {
              console.log(err)
            }
            startApplication();
          })
          break;
        case ('view roles table'):
          db.query('SELECT roles.role_id, roles.role_title, departments.department_name, roles.salary FROM (roles JOIN departments ON roles.role_id = departments.department_id)', function(err, result) {
            if (!err) {
              console.table(result)
            } else {
              console.log(err)
            }
            startApplication();
          })
          break;
        case ('view employees table'):
          db.query('SELECT employees.employee_first_name, employees.employee_last_name, employees.role_title, departments.department_name, roles.salary, employees.employee_manager FROM (employees JOIN roles ON employees.role_title = roles.role_title JOIN departments ON roles.department_id = departments.department_id)', 
          function(err, result) {
            if (!err) {
              console.table(result)
            } else {
              console.log(err)
            }
            startApplication();
          })
          break;
        case ('add a department'):
          require('./prompts/addDepartment');
          break;
        case ('add a role'):
          require('./prompts/addRole');
          break;
        case ('add an employee'):
          require('./prompts/addEmployee');
          break;
        case ('update an employee role'):
          require('./prompts/addEmployee');
          break; 
      } 
    })
}

startApplication();

module.exports = { db, startApplication };
