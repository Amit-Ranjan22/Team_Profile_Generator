const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
// const Employee = require("./lib/Employee");

const message = require("./source/message");
const indexGenerator = require("./source/indexGenerator");

// const Intern = require("./lib/Intern");

const managerPrompts = [
  {
    name: "name",
    type: "input",
    message: "Please enter the team manager's name: "
  },
  {
    name: "id",
    type: "input",
    message: "Please enter manager's employee ID number: "
  },
  {
    name: "number",
    type: "input",
    message: "Please enter Manager's office phone number: "
  },
  {
    name: "email",
    type: "input",
    message: "Please enter Manager's email address: "
  },
];

const engineerPrompts = [
  {
    name: "name",
    type: "input",
    message: "Please enter Engineer's name: "
  },
  {
    name: "id",
    type: "input",
    message: "Please enter Engineer's employee ID number: "
  },
  {
    name: "github",
    type: "input",
    message: "Please enter Engineer's Github username: "
  },
  {
    name: "email",
    type: "input",
    message: "Please enter Engineer's email address: "
  }
];

const internPrompts = [
  {
    name: "name",
    type: "input",
    message: "Please enter the intern's name: "
  },
  {
    name: "id",
    type: "input",
    message: "Please enter Intern's employee ID number: "
  },
  {
    name: "school",
    type: "input",
    message: "Please enter Intern's School: "
  },
  {
    name: "email",
    type: "input",
    message: "Please enter Intern's email address: ",
  }
];

const genPrompt = [
  {
    name: "option",
    type: "list",
    message: "Would you like to add another team member? ",
    choices: [
        "Add an Intern", 
        "Add an Engineer", 
        "No Thanks, I am done."
    ]
  }
];

const teamList = (function () {
    let employees = [];

    function init() {
        console.log(message.greeting);
        createManager();
    }

    function userOption() {
        inquirer.prompt(genPrompt)
        .then((answer) => {
            switch(answer.option) {
                case "Add an Intern":
                    createIntern();
                    break;
                case "Add an Engineer":
                    createEngineer();
                    break;
                case "No Thanks, I am done.":
                    writeFile(employees);
            }
        });
    }

    // Creates a manager object from prompt
    function createManager() {
        inquirer.prompt(managerPrompts)
        .then((data) => {
            employees[employees.length] = new Manager(data.name, data.id, data.email, data.number);

            userOption();
        });
    }

    // Creates an intern object from prompt
    function createIntern() {
        inquirer.prompt(internPrompts)
        .then((data) => {
            employees[employees.length] = new Intern(data.name, data.id, data.email, data.school);

            userOption();
        });
    }

    // Creates an Engineer object from prompt
    function createEngineer() {
        inquirer.prompt(engineerPrompts)
        .then((data) => {
            employees[employees.length] = new Engineer(data.name, data.id, data.email, data.github);

            userOption();
        });
    }

    function writeFile(data) {
        let textContent = indexGenerator(data);
        
        fs.writeFile("index.html", textContent, (err) => {
            err ? console.log(err) : console.log(message.saved);
        });
        
    }

    return {
        init: init,
    }

})();

teamList.init();