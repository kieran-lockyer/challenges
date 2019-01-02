const chalk = require('chalk');
var inquirer = require('inquirer');

console.log(chalk.blue('Hello world!'));

let contacts = {}

inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            default: false
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your phone number?',
            default: false
        }
    ])
    .then(answers => {
        contacts[answers.name] = answers.number
    });

console.log(contacts)