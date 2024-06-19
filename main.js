#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to Currency Convertor \n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellowBright("\n Select the currency to convert from: \n"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellowBright("\n Select the currency to convert into: \n"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow("\n Enter the amount to convert: \n")
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(chalk.yellowBright(`converted Amount = ${chalk.greenBright(converted_amount.toFixed(2))}`));
