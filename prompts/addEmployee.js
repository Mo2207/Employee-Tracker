
const inquirer = require('inquirer');
const { db, startApplication } = require('../app');

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
      }
    ])
    .then((data) => {
      console.log(data)
      db.query(`
      INSERT INTO employees (employee_first_name, employee_last_name)
      VALUES (
        '${(data.employee_first_name).toUpperCase()}',
        '${(data.employee_last_name).toUpperCase()}'
      )`,
      function (err, result) {
        if (!err) {
          console.table(result)
        } else {
          console.log(err)
        }
        startApplication();
      })
    })
}

addEmployee();