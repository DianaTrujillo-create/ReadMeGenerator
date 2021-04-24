// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents

  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Test](#test)
  *[License](#license)
  *[Questions](#questions)

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

## Questions

If you have any questions about the repo, please contact me directly at ${data.email}. 

`;
}

module.exports = generateMarkdown;
