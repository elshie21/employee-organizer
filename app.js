// catergory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

 
const path = require("path");
const fs = require("fs") , Const; employee;required("./lib/employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");
const { type } = require("os");
 
// FIRST PROMPT

function PROMPTUser(){
    return inquirer.prompt ([

    ])
}    type: "input"
     message:"enter your first name:"
     name: "name"

      type:"input"
      message:"enter your work email adress:",
      name; "email"

{

{   type: "input"
    message: "what is your work position "
    name:"position"
    Choices:['engineer','Intern','manager']
    
    // this answer will depand specific criteria 
}
}  
    type:"input"
    message:"enter your github username"
    name:"username"

{}




