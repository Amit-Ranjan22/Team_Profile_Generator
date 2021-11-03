# Team_Profile_Generator

## User Story

    As a Manager: I want to have a application that takes in information about employees on a software engineering team, then generates a webpage that displays summaries for each person.

---

## Acceptance Criteria

GIVEN a command-line application that accepts user input<br>

- `When: I am prompted for my team members and their information`<br>
  `Then: an HTML file is generated that displays a nicely formatted team roster based on user input.`

- `When: I click on an email address in the HTML`<br>
  `Then: my default email program opens and populates the TO field of the email with the address`

- `When: I click on the GitHub username`<br>
  `Then: hat GitHub profile opens in a new tab`

- `When: I start the application`<br>
  `Then: I am prompted to enter the team manager’s name, employee ID, email address, and office number`

* `When: I enter the team manager’s name, employee ID, email address, and office number`<br>
  `Then: I am presented with a menu with the option to add an engineer or an intern or to finish building my team`

* `When: I select the engineer option`<br>
  `Then: I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu`

* `When: I select the intern option`<br>
  `Then: I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu`

* `When: I decide to finish building my team`<br>
  `Then: I exit the application, and the HTML is generated`

---

## Mock-Up

    The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./dist/images/10-object-oriented-programming-homework-demo.png)

---

## Guidelines to be followed to create this Node.js command-line application:

Application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests.<br>
Application should use [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.<br>
Application will be invoked by using the following command:

```bash
node index.js
```

Directory structure example given below can be followed to create all the necessary folders and files:

```md
.
├── **tests**/ //jest tests
│ ├── Employee.test.js
│ ├── Engineer.test.js
│ ├── Intern.test.js
│ └── Manager.test.js
├── dist/ // rendered output (HTML) and CSS style sheet  
├── lib/ // classes
├── src/ // template helper code
├── .gitignore // indicates which folders and files Git should ignore
├── index.js // runs the application
└── package.json
```

**Important**: Make sure to remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to application's repository.

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

- `name`

- `id`

- `email`

- `getName()`

- `getId()`

- `getEmail()`

- `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

- `officeNumber`

- `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

- `github`&mdash;GitHub username

- `getGithub()`

- `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

- `school`

- `getSchool()`

- `getRole()`&mdash;overridden to return `'Intern'`

---

## Screen-shot of the html generated through command-line

![HTML webpage titled “My-Team” features three boxes listing employee names, titles, and other key info.](./dist/images/)

---

## Link to GitHub repo

Please visit my [GitHub Page](https://github.com/Amit-Ranjan22/Team_Profile_Generator.git) for the source code repository.

---

## Link to the walktrough video of the application

Please visit my [Google-Drive](https://github.com/Amit-Ranjan22/Team_Profile_Generator.git) page to watch the video walktrough of the created application.
