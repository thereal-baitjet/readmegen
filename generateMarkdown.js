
function generateMarkdown(response){
  let badge = "";
  if(response.license == "MIT"){
      badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
  }else if (response.license == "APACHE 2.0"){
      badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  }else if (response.license == "GPL 3.0"){
      badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }else if (response.license == "BSD 3"){
      badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
  }
}

module.exports = generateMarkdown;
