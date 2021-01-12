// const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
var teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Overall starting question to specify which array of questions user should be prompted with.
var employeeTitle = [
  {
    type: "list",
    name: "role",
    message: "Please select the role of the employee:?",
    choices: [
      "Engineer",
      "Intern",
      "Manager",
      "Complete roster, no employees left to add.",
    ],
  },
];

// Array of questions targeted for 'Engineer' role.
var devEngineerQuest = [
  {
    type: "input",
    message: "Please enter engineer\'s name:",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter engineer\'s ID number:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter engineer\'s email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter engineer\'s GitHub username:",
    name: "github",
  },
];

// Array of questions targeted for 'Intern' job title.
var devInternQuest = [
  {
    type: "input",
    message: "Please enter intern\'s name:",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter your intern\'s ID number:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter intern\'s email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the school intern attends:",
    name: "school",
  },
];

// Array of questions targeted for 'Manager' job title.
var devManagerQuest = [
  {
    type: "input",
    message: "Please enter manager\'s name:",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter manager\'s ID number:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter manager\'s email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter manager\s office number:",
    name: "officeNumber",
  },
];

generateTeam();

// Function to prompt the user with questions based on job title to generate software team.
function generateTeam() {
  inquirer.prompt(employeeTitle)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .then(function (response) {
      // If user selects 'Engineer' as job title--prompt with questions for engineer
      if (response.role === 'Engineer') {
        inquirer.prompt(devEngineerQuest).then((response) => {
          console.log(response);

          var newEngineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
          );
          teamMembers.push(newEngineer);
          console.log('A new engineer has been added to your team!');
          generateTeam();
        });

        // If user selects 'Manager' as job title--prompt with questions for manager
      } else if (response.role === 'Manager') {
        inquirer.prompt(devManagerQuest).then((response) => {
          console.log(response);

          var newManager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
          );
          teamMembers.push(newManager);
          console.log('A new manager has been added to your team!');
          generateTeam();
        });

        // If user selects 'Intern' as job title--prompt with questions for intern
      } else if (response.role === 'Intern') {
        inquirer.prompt(devInternQuest).then((response) => {
          console.log(response);

          var newIntern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
          );
          teamMembers.push(newIntern);

          console.log('A new intern has been added to your team!');
          generateTeam();
        });

        // If user selects 'Engineer' as job title--prompt with questions for engineer
      } else {
        var main = render(teamMembers);
        fs.writeFile(outputPath, main, (err) => {
          if (err) throw err;
          console.log('Your new team has been generated in the team.html file!')
        });
      }
    });
}
