// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

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
* [How to Use This Application](#HowtoUseThisApplication)
## Features
${data.features}
## Languages & Dependencies
${data.require}
## How to Use This Application:
${data.usage}
`;
}

module.exports = generateMarkdown;