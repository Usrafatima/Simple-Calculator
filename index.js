#!/usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subraction", "Multiplication", "Division"]
    },
]);
//conditional Statement
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondnumber);
}
else if (answer.operators === "Subraction") {
    console.log(answer.firstNumber - answer.secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondnumber);
}
else {
    console.log("Please select valid operators");
}
