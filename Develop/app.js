// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// const jest = require('jest');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
var teamMembers = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var employeeRole = [
    {
        type: 'list',
        name: 'jobTitle',
        message: 'Which best describes the employee/s role?', 
        choices: [
            'Engineer',
            'Intern',
            'Manager',
            'No more employees to add'
        ],
    },
];

var devEngineerQuest = [
    {
        type: 'input',
        message: 'Please enter your name (first and last):',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'Please enter your employee ID number:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'github',
    },
];

var devInternQuest = [
    {
        type: 'input',
        message: 'Please enter your name (first and last):',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'Please enter your employee ID number:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter the school you attend',
        name: 'school',
    },
];

var devManagerQuest = [
    {
        type: 'input',
        message: 'Please enter your name (first and last):', 
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter your employee ID number:', 
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your office number:',
        name: 'officeNumber',
    },
];

promptEmployeeQuestions();

function promptEmployeeQuestions() {
    inquirer.prompt(employeeRole).then(function (response) {
        console.log(response);
        return response;
    }).then (function (response) {
        if (response.jobTitle === 'Engineer') {
            inquirer.prompt(devEngineerQuest).then(data => {
                console.log(data);

                var newEngineer = new Engineer(
                    data.name, 
                    data.id,
                    data.email, 
                    data.github
                );
                teamMembers.push(newEngineer);
                promptEmployeeQuestions();
            });
        } else if (response.jobTitle === 'Manager') {
            inquirer.prompt(devManagerQuest).then((data) => {
                console.log(data);

                var newManager = new Manager(
                    data.name, 
                    data.id,
                    data.email,
                    data.officeNumber,
                );
                teamMembers.push(newManager);
                promptEmployeeQuestions();
            });
        } else if (response.jobTitle === 'Intern') {
            inquirer.prompt(devInternQuest).then((data) => {
                console.log(data);

                var newIntern = new Intern(
                    data.name, 
                    data.id,
                    data.email,
                    data.school
                );
                teamMembers.push(newIntern);
                promptEmployeeQuestions();
            });
        } else {
            var html = render(teamMembers);
            fs.writeFile(outputPath, html, (error) => {
                if (error) throw error;
            });
        };
    });
};