
const inquirer = require('inquirer');
const { db, startApplication } = require('../app');

const employeesArray = [];
db.query('SELECT employee_first_name FROM employees', function(err, result) {
  if (!err) {
    result.forEach(item => employeesArray.push(`${item.employee_first_name}`))
    updateEmployee();
  } else {
    console.log(err);
  }
})

const rolesArray = [];
db.query('SELECT role_title FROM roles', function(err, result) {
  if (!err) {
    result.forEach(item => rolesArray.push(item.role_title))
  } else {
    console.log(err);
  }
})

console.log(employeesArray)
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employee_first_name',
        message: 'What employee would like to update?',
        choices: employeesArray
      },
      {
        type: 'list',
        name: 'role_title',
        messsage: 'What role would you like to change the employee to?',
        choices: rolesArray
      }
    ])
    .then((data) => {
      db.query(`
      UPDATE employees
      SET role_title = '${(data.role_title).toUpperCase()}'
      WHERE employee_first_name = '${data.employee_first_name}'`,
      function (err, result) {
        if (!err) {
          console.log("Employee updated!")
        } else {
          console.log(err)
        }
        startApplication();
      })
    })
}
