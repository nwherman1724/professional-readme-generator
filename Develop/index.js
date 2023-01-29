// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

const apacheLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

const bsdLicense = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

const gnuLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

function renderLicenseBadge(license) {
  if (license == 'MIT License') {
    return mitLicense;
  } else if (license == 'Apache License 2.0') {
    return apacheLicense;
  } else if (license == 'BSD License') {
    return bsdLicense;
  } else if (license == 'GNU GPLv3') {
    return gnuLicense;
  } else {
    return '';
  }
}

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
    message: 'Enter a description of your project:',
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
    type: 'list',
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
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const generateReadMe = ({ title, description, installation, usage, license, contribute, tests, github, email}) =>
  `# ${title}

  ${renderLicenseBadge(license)}

  ## :blue_book: Description

  ${description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}
      
  ## License
  
  This project is cover under the ${license}.

  ## Contribution
  ${contribute}

  ## Tests
  ${tests}
  
  ## Questions
  Github Username: ${github}

  Github Link: https://github.com/${github}
  
  Email Address: ${email}
  
  Email me if you have additional questions.`;
  
// TODO: Create a function to initialize app
function init() {

  

  inquirer
    .prompt(questions)
      .then((answers) => {
        const readMeContent = generateReadMe(answers);
    
        fs.writeFile('README.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });

}

// Function call to initialize app
init();
