const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [{
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username', 
    
    // locates github username
}, {
    type:"input",
    message: "What is the title of the project?", 
    name: "Title",
    // create title of project
}, { 
    type: 'input',
    message: "Give a detailed description of your project.",
    name: "Description",
    // give description of your project
}, {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation"
    // what is required in order for app to function
}, {
    type: "input", 
    message: "What is app used for?", 
    name: "Usage",
    // what is the app intended for
} 

]

    ])
}

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
