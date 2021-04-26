const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username', 
    },

    {
    type:'input',
    message: "What is the title of the project?", 
    name: "Title",
    },

    {
    type: 'input',
    message: "Give a detailed description of your project?",
    name: "Description",

    }, 
    
    {
    type: 'input',
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
    default: 'npm i',
    }, 
    
    {
    type: 'input', 
    message: "What is app used for?", 
    name: "Usage",
    }, 
    
    {
    type: 'list',
    message: "What license is being used?",
    name: "License",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
    type: 'input',
    message: "Who contributed to this project?:",
    name: "Contributing",
    }, 
    
    {
    type: 'input',
    message: "What is needed to test this app?",
    name: "Test",
    default: 'npm test',
    }, 
    
    {
    type: 'input',
    message: "What is your email address?",
    name: "Email",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log('Generating README...');
        writetoFile("README.md", generateMarkdown(data));
    });
    
}

// function call to initialize program
init();
