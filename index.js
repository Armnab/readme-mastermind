// TODO: Include packages needed for this application
import fs from 'fs'; 
import inquirer from 'inquirer'; 
import generateMarkdown from './utils/generateMarkdown.js'; 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should your project have?',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to this project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing this application:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`Successfully created ${fileName}!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
        .then((responses) => {
            const markdownContent = generateMarkdown(responses); 
            writeToFile('README.md', markdownContent); 
        })
        .catch((err) => {
            console.error('Error initializing app:', err);
        });
}

// Function call to initialize app
init();

