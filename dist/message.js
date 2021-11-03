const chalk = require("chalk");

const greeting = `${chalk.magentaBright(
  "=================================================="
)}
${chalk.bgRed("Team Profile Generator")}
${chalk.magentaBright("==================================================")}
Welcomt to the Team Profile Generator.By answering the following questions, this command line application will generate an HTML file featuring your team's information.Lets begin with the team's manager.`;

const saved = `File successfully written as ${chalk.yellowBright("index.html")}`;

module.exports.greeting = greeting;
module.exports.saved = saved;