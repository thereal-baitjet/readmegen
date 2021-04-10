// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require("inquirer/lib/objects/choices");
const util = require("util");
//add library

const writeFileAsync = util.promisify(fs.writeFile)
//pulls librazy and writes file 

function promptUser() {
  return inquirer.prompt([
    //prompt with questions
    {
      type: "input",
      name: "author",
      message: "who wrote this project?"
    },
    {
      type: "input",
      name: "username",
      message: "what is your Github username"
    },
    {
      type: "input",
      name: "email",
      message: "what your email?"
    },
    {
      type: "input",
      name: "title",
      message: "what is your project title"
    },
    {
      type: "input",
      name: "description",
      message: "please write a brief description of your Project"
    },
    {
      type: "list",
      name: "license",
      message: "what kind of license should your project have?",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
    },
    {
      type: "input",
      name: "installation",
      message: "what command should be run to install dependancies"
    },
    {
      type: "input",
      name: "tests",
      message: "what command should be run to run tests"
    },
    {
      type: "input",
      name: "usage",
      message: "what does the user need to know about usuing this repo?"
    },
    {
      type: "input",
      name: "tests",
      message: "what command should be run to run tests"
    },
    {
      type: "input",
      name: "contribute",
      message: "what does the user need to know to contributre to the repo"
    },
    {
      type: "input",
      name: "credits",
      message: "did anyone contributre to this repo leave a link to his/her presence and thier name"
    },
  ])
}
//list of questions


function generateMD(response) {
  let badge = "";
  if (response.license == "MIT") {
    badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
  } else if (response.license == "APACHE 2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  } else if (response.license == "GPL 3.0") {
    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (response.license == "BSD 3") {
    badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
  }
  //generates badge depending on chice of list of license


  return `# ${response.title}  ${badge}
  ${response.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ### Installation:
  In order to install the necessary dependencies, open the console and run the following:
  \`\`\`${response.installation}\`\`\`
  ### Usage:
  ${response.usage}
  ### License:
  This project is licensed under:
  ${response.license}
  ### Contributing:
  ${response.contribute}
  ### Tests:
  In order to test open the console and run the following:
  \`\`\`${response.tests}\`\`\`
  ### Questions:
  If you have any questions contact me on [GitHub](https://github.com/${response.username}) or contact 
  ${response.author} at ${response.email}
  ![picture](https://github.com/${response.username}.png?size=80)
   ### Credits 
   ${response.credits}
   ### badges
  [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-informational?style=flat&logo=linkedin&logoColor=red&color=0D76A8)](https://www.linkedin.com/in/juan-santos-8380b0186/)


  ![twitterbadge](https://img.shields.io/twitter/url?logoColor=red&style=social&url=https%3A%2F%2Ftwitter.com%2FBaitjet4)
   `
  //organizes the readme text with response specific prompt questions input and enters it into the resulting string
}

promptUser().then(function (response) {
  const markdown = generateMD(response);
  return writeFileAsync("README.md", markdown);
}).then(function () {
  console.log("README.md was sucessfully created...");

}).catch(function (err) {
  console.log(err)
})
