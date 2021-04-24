const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username', 
    },

    {
    type:"input",
    message: "What is the title of the project?", 
    name: "Title",
    },

    {
    type: 'input',
    message: "Give a detailed description of your project.",
    name: "Description",

    }, 
    
    {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation"
    }, 
    
    {
    type: "input", 
    message: "What is app used for?", 
    name: "Usage",
   
    }, 
    
    {
    type: "list",
    message: "What license is being used?",
    name: "License",
    },

    {
    type: "input",
    message: "Who contributed to this project?:",
    name: "Contributing"
    }, 
    
    {
    type: "input",
    message: "What is needed to test this app?",
    name: "Test",
    }, 
    
    {
    type: "input",
    message: "What is your email address?",
    name: "Email",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            return console.log(err);
        } else{
            console.log("README.md was created");
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writetoFile("README.md", generateMarkdown(data));
        console.log(data)
    });
}

// function call to initialize program
init();
