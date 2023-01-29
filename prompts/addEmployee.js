
const inquirer = require('inquirer');
const { db, startApplication } = require('../app');

const employeesArray = [];
db.query('SELECT employee_first_name, employee_last_name from employees', function(err, result) {
  if (!err) {
    result.forEach(item => employeesArray.push(`${item.employee_first_name} ${item.employee_last_name}`))
  } else {
    console.log(err);
  }
})

const rolesArray = [];
db.query('SELECT role_title from roles', function(err, result) {
  if (!err) {
    result.forEach(item => rolesArray.push(item.role_title))
  } else {
    console.log(err);
  }
})

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'employee_first_name',
        messsage: 'Enter the first name of the employee.'
      },
      {
        type: 'input',
        name: 'employee_last_name',
        messsage: 'Enter the last name of the employee.'
      },
      {
        type: 'list',
        name: 'role_title',
        messsage: 'Enter the role of the employee.',
        choices: rolesArray
      },
      {
        type: 'list',
        name: 'employee_manager',
        messsage: 'Enter the manager for this employee.',
        choices: employeesArray
      }
    ])
    .then((data) => {
      console.log(data)
      db.query(`
      INSERT INTO employees (employee_first_name, employee_last_name, role_title, employee_manager)
      VALUES (
        '${(data.employee_first_name).toUpperCase()}',
        '${(data.employee_last_name).toUpperCase()}',
        '${(data.role_title).toUpperCase()}',
        '${(data.employee_manager).toUpperCase()}'
      )`,
      function (err, result) {
        if (!err) {
          console.log("Employee added!")
        } else {
          console.log(err)
        }
        startApplication();
      })
    })
}

addEmployee();