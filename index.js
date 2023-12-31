// declares and requires the necessary packages/ files
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array holding all the questions for the user
const questions = [
{
    type:'input',
    message:'What is the title of your project?',
    name:'title',
},
{
    type:'input',
    message:'Give a pref description of your project.',
    name:'description',
},
{
    type:'input',
    message:'How would a user install this project?',
    name:'install',
},
{
    type:'input',
    message:'What information would you give to a user that is using this?',
    name:'usage',
},
{
    type:'input',
    message:'What are the guidelines for someone to contribute to this?',
    name:'contribution',
},
{
    type:'input',
    message:'How would someone go about testing your project?',
    name:'test',
},
{
    type:'list',
    message:'What type of license do you want for your project?',
    choices:['Mit','GPLv2','Apache','GPLv3','BSD 3-clause','BSD 2-clause','LGPLv3','None'],
    name:'license',
},
{
    type:'input',
    message:'What is your github username?',
    name:'username',
},
{
    type:'input',
    message:'What is your email so people can reach out if they have further questions?',
    name:'email',
},

];

// after the questions are answered this function is called to write all the markdown after the generateMarkdown is completed
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),(err)=>{
        if (err) throw err;
    })
}

// function that initializes the app with the questions
function init() {
    inquire.prompt(questions)
    .then((data)=>{
    writeToFile(`./test/README${data.title}.md`,data)})
}

// Function call to initialize app
init();
