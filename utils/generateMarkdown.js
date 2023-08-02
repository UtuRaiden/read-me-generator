// function to display the correct badge for the license that was selected
function renderLicenseBadge(license) {
if (license === "Mit"){
  return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)"
}
if (license === "GPLv2"){
  return "![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
}
if (license === "Apache"){
  return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
}
if (license === "None"){
  return ""
}
if (license === "GPLv3"){
  return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)"
}
if (license === "BSD 3-clause"){
  return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
}
if (license === "BSD 2-clause"){
  return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"
}
if (license === "LGPLv3"){
  return "![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)"
}
}

// Function to generate the link to the license that was selected
function renderLicenseLink(license) {
  if (license === "Mit"){
    return "[Mit](https://opensource.org/licenses/MIT)"
  }
  if (license === "GPLv2"){
    return "[GPLv2]((https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  if (license === "Apache"){
    return "[Apache](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === "None"){
    return "N/A"
  }
  if (license === "GPLv3"){
    return "[GPLv3](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license === "BSD 3-clause"){
    return "[BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)"
  }
  if (license === "BSD 2-clause"){
    return "[BSD 2-clause](https://opensource.org/licenses/BSD-2-Clause)"
  }
  if (license === "LGPLv3"){
    return "[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)"
  }
}
// function that takes all the data from the questions to generate the markdown
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Table of contents

  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [Contribution](#Contribution)
  
  [Tests](#Tests)

  [License](#License)

  [Questions](#Questions)

  ## Description <a id="Description"></a>

  ${data.description}

  ## Installation <a id="Installation"></a>

  ${data.install}

  ## Usage <a id="Usage"></a>

  ${data.usage}

  ## Contribution <a id="Contribution"></a>

  ${data.contribution}

  ## Tests  <a id="Tests"></a>

  ${data.test}

  ## License <a id="License"></a>

  ${renderLicenseLink(data.license)}

  ## Questions <a id="Questions"></a>

  I am on github at [${data.username}](https://github.com/${data.username})

  Or my email is ${data.email}
 

  
`;
}
//exports the generateMarkdown return to the writeToFile function in index.js
module.exports = generateMarkdown;
