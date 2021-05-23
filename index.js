const fs = require('fs');
const path = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generate = require('./src/generate');
const inquirer = require('inquirer')
const team = [];

// function nextEmployee() {
//     inquirer
//         .prompt({
//             type: 'list',
//             name: 'choices',
//             message: 'Would you like to create another employee, or finish?',
//             choices: ['Engineer', 'Intern', 'Finish'],
//             default: 'Finish'
//         }).then(

//             function addNew() {
//                 if (choices === 'Engineer') {
//                     getEngineer()
//                 } else if (choices === 'Intern') {
//                     getIntern()
//                 } else {
//                     writeToFile()
//                 }
//             })
// }

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
        })

    nextEmployee()
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
        })

    nextEmployee()
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
        })

    nextEmployee()
}

function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, 'dist', fileName), data, err => {
        console.log(err)
    });
}

function init(answers) {
    generate('team.html', generateHTML(answers))
    console.log("The file was written!")
}

getManager();

// module.exports = { getManager, getEngineer, getIntern, writeFile, init }