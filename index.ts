#!  /use/bin/env node
import inquirer from "inquirer";

let Convertion = {
 "PKR": {
     "USD": 0.0036,
     "INR": 0.30,
     "AED": 0.013,
     "PKR": 1,
 },
 "USD": {
     "USD": 1,
     "INR": 83.07,
     "AED": 3.67,
     "PKR": 277.98,
 },
 "INR": {
     "USD": 83.07,
     "INR": 1,
     "AED": 0.044,
     "PKR": 3.35,  
 },
 "AED": {
    "USD": 0.27,
    "INR": 22.39,
    "AED": 1,
    "PKR": 74.93,  
},     
}

const answer:{
    from: "PKR" | "USD" | "INR" | "AED",
    to: "PKR" | "USD" | "INR" | "AED",
    amount: number
}= await inquirer.prompt ([
{
    type: "list",
    name: "from",
    choices: ["USD","AED","INR","PKR"],
    message: "select your currency:",
},
{
    type: "list",
    name: "to",
    choices: ["USD","AED","INR","PKR"],
    message: "select your convertion currency:",
},
{
    type: "number",
    name: "amount",
    message: "Enter your convertion  amount:",
},
]);

const {from, to, amount} = answer;
console.log(from,to,amount)
if (from && to && amount ) {
    let result = Convertion[from][to] * amount;

    console.log(`your convertion from ${from} to ${to} is ${result}`)
} 
else {
    console.log("Invalid inputs")
}

