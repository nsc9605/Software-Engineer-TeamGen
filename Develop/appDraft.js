

// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const inquirer = require('inquirer');
// const path = require('path');
// const fs = require('fs');
// // const jest = require('jest');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'team.html');

// const render = require('./lib/htmlRenderer');
// const teamMembers = [];


// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)
// function employeeRole() {
//     inquirer.prompt(
//         [
//             {
//                 type: 'list',
//                 name: 'jobTitle',
//                 message: 'Which best describes the employee/s role?', 
//                 choices: [
//                     'Engineer',
//                     'Intern',
//                     'Manager',
//                     'No more employees to add'
//                 ]
//             }

//     ]).then(function(response) {
//         if (response.jobTitle === 'Engineer') {
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     message: 'Please enter your name (first and last):',
//                     name: 'name', 
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter your employee ID number:',
//                     name: 'id',
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter your email address:',
//                     name: 'email',
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter your GitHub username:',
//                     name: 'github',
//                 },
              
//             ]).then(function(response) {
//                 var newEngineer = new Engineer(response.name, response.id, response.email, response.github);
//                 newEngineer['jobType'] = newEngineer.
//             })
            
//         }
//     }


// // Engineer Prompts
// devEngineer = () => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'Please enter your name (first and last):',
//             name: 'name', 
//         },
//         {
//             type: 'input',
//             message: 'Please enter your employee ID number:',
//             name: 'id',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your email address:',
//             name: 'email',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your GitHub username:',
//             name: 'github',
//         },
      
//     ]);

// };


// // Intern Prompts
// devIntern = () => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'Please enter your name (first and last):',
//             name: 'name',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your employee ID number:',
//             name: 'id',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your email address:',
//             name: 'email',
//         },
//         {
//             type: 'input',
//             message: 'Please enter the name of your school:',
//             name: 'school',
//         },
//     ])
// }

// // Manager Prompts
// devManager = () => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'Please enter your name (first and last):', 
//             name: 'name',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your employee ID number:', 
//             name: 'id',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your email address:',
//             name: 'email',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your office number:',
//             name: 'officeNumber',
//         },
//     ])
// }


// addDevEmployee = () => {
   
// };

// };

// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!



// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // Function to initialize program
// function init() {
//     inquirer.prompt(start).then(answer) {
//         console.log('Generating Development Team...');
//         writeToFile('./Develop/output/team.html', )
//     }
// }


// // Call to initialize program
// init();








// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work! ```

// // .then(userSelect => {

// //     switch(userSelect.memberSelect) {
// //         case 'Engineer':
// //             addEngineer();

// //         case 'Intern':
// //             addIntern();

// //         case 'Manager':
// //             addManager();

// //         case 'No more employees':
// // })
