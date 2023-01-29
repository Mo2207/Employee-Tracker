
const inquirer = require('inquirer');
const { db, startApplication } = require('../app');

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'department_name',
        messsage: 'Enter the name of the department.'
      }
    ])
    .then((data) => {
      console.log(data)
      db.query(`
      INSERT INTO departments (department_name)
      VALUES ('${(data.department_name).toUpperCase()}')`,
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

addDepartment();