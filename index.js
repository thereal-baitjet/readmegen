// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require("inquirer/lib/objects/choices");
const { report } = require("process");
const util = require("util");




inquirer
  .prompt([
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
      message: "please write email here"
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
      name: "License",
      message: "what kind of license should your project have?",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
    },
    {
      type: "input",
      name: "installatiomn",
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
  ])



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
