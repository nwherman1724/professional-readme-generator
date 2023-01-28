// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your projects title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What needs to be installed?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Are there any usage requirements?',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What type of license does the project have?',
    choices: ['MIT License', 'Apache License 2.0', 'BSD License', 'GNU GPLv3'],
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How to contribute to this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests can be run?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who else deserves credit for this work?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const generateReadMe = ({ title, description, installation, usage, license, contribute, tests}) =>
  `# ${title}

  ## Description

  ${description}

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?

  ## Table of Contents (Optional)

  If your README is long, add a table of contents to make it easy for users to find what they need.

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${installation}

  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  ## Usage
  ${usage}

  Provide instructions and examples for use. Include screenshots as needed.

  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

      ![alt text](assets/images/screenshot.png)
      
  ## License
  ${license}

  ## How to Contribute
  ${contribute}

  ## Tests
  ${tests}
  
  ## Questions`;
  
// TODO: Create a function to initialize app
function init() {

  

  inquirer
    .prompt(questions)
      .then((answers) => {
        const readMeContent = generateReadMe(answers);
    
        fs.writeFile('REAMME.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });

}

// Function call to initialize app
init();
