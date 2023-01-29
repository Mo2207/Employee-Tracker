
const inquirer = require('inquirer');
const { db, startApplication } = require('../app');

const departmentsArray = [];
db.query('SELECT department_name from departments', function(err, result) {
  if (!err) {
    result.forEach(item => departmentsArray.push(item.department_name))
  } else {
    console.log(err);
  }
})

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'role_title',
        messsage: 'Enter the name of the role.'
      },
      {
        type: 'input',
        name: 'salary',
        messsage: 'Enter the salary of this role.'
      },
      {
        type: 'list',
        name: 'department_name',
        messsage: 'Enter the department this role belongs to.',
        choices: departmentsArray
      }
    ])
    .then((data) => {
      db.query(`
      INSERT INTO roles (role_title, salary, department_name)
      VALUES (
        '${(data.role_title).toUpperCase()}',
        '${data.salary}',
        '${data.department_name}'
      )`,
      function (err, result) {
        if (!err) {
          console.log("Role added!")
        } else {
          console.log(err)
        }
        startApplication();
      })
    })
}

addRole();