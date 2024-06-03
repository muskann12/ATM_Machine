import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 2000;
let myPin = 1234;
console.log("Welcome to muskan ATM machine");
let pinAnswers = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code"
    }
]);
if (pinAnswers.pin === myPin) {
    console.log("pin is corect login sucessfulled");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withDraw ammount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Ammount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter amount to withdraw"
            }
        ]);
        if (amountAns.ammount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.ammount;
            console.log(amountAns.amount, ' Withdraw sucessfully');
            console.log("your remaining balance is", { myBalance });
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your account balance is", { myBalance });
    }
}
else {
    console.log("pin is incorrect try again!");
}
