//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${data.features}
## Languages & Dependencies
${data.require}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;