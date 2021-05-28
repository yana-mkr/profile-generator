const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generate');
const inquirer = require('inquirer')
const team = [];

function getManager() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the manager's ID number?"
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: "What is the manager's email address?"
            },
            {
                type: 'text',
                name: 'office',
                message: "What is the manager's office number?"
            }
        ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.office)
            team.push(manager);
        }).then((data) => {
            nextEmployee('y');
        });
}

function nextEmployee(data) {
    if (!data.length) {
        //generateHTML()
        return;
    }
    inquirer
        .prompt({
            type: 'list',
            name: 'choices',
            message: 'Would you like to create another employee, or finish?',
            choices: ['Engineer', 'Intern', 'Finish'],
            default: 'Finish'
        }).then((data) => {
            //console.log(data);
            if (data.choices === 'Engineer') {
                getEngineer();
            } else if (data.choices === 'Intern') {
                getIntern();
            } else {
                writeToFile();
            }
        });
}

function getEngineer() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "What is the engineer's ID number?"
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "What is the engineer's email address?"
            },
            {
                type: 'text',
                name: 'github',
                message: "What is the engineer's github username?"
            }
        ])
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github)
            team.push(engineer);
        }).then((data) => {
            nextEmployee('y');
        });
}

function getIntern() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'text',
                name: 'internId',
                message: "What is the intern's ID number?"
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "What is the intern's email address?"
            },
            {
                type: 'text',
                name: 'school',
                message: "What school does the intern attend?"
            }
        ])
        .then((data) => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.school)
            team.push(intern);
        }).then((data) => {

            nextEmployee('y');
        });
}

function writeToFile() {
    fs.writeFile(path.join(__dirname, 'dist', 'team.html'), generateHTML(team), 'utf-8', err => {
        console.log(err)
    });
}

// function generateHTML(answers) {
//     generate.generateHTML('team.html', answers)
//     console.log("The file was written!")
// }

getManager();
