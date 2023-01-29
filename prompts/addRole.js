
const inquirer = require('inquirer');
const { db, startApplication } = require('../app');

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
      }
    ])
    .then((data) => {
      console.log(data)
      db.query(`
      INSERT INTO roles (role_title, salary)
      VALUES (
        '${(data.role_title).toUpperCase()}',
        '${data.salary}'
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

addRole();