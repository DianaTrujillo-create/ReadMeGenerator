// Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (License !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${License}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(License) {
  if (License !== 'None') {
    return `\n* [License](#License)\n`;
  }
  return '';
}

// Create a function that returns the license section of README

function renderLicenseSection(License) {
  if (License !== 'None') {
    return `## License

This project is licensed under the ${License} license.`;
  }
  return '';
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.License)}


  ## Table of Contents

  *[Description](#Description)
  *[Installation](#Installation)
  *[Usage](#Usage)
  ${renderLicenseLink(data.License)}
  *[Contributing](#Contributing)
  *[Test](#Test)
  *[License](#License)
  *[Questions](#Questions)

 ## Description :

  ${data.Description}

 ## Installation :
  
  To install necessary dependencies, run the following command:

  \'\'\'
  ${data.Installation}
  \'\'\'

 ## Usage 

  ${data.Usage}

  ${renderLicenseSection(data.License)}

 ## Contributing

 ${data.Contributing}

 ## Test

 To run tests, run the following command: 

 \'\'\'
 ${data.Test}
 \'\'\'

 ## License: 
  ![License](https://img.shields.io/badge/License-${data.License}-blue.svg "License Badge")
    For more information about the License, click on the link below.
      - [License](https://opensource.org/licenses/${data.License})

 ## Questions

 If you have any questions about the repo, please contact me directly at ${data.email}. 
  You can find more of my work at [${data.github}](https://github.com/${
  data.github}/).

 `;
}

module.exports = generateMarkdown;
