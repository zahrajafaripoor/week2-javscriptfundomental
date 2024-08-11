// let age = 18;

// if (age < 18) {
//     console.log("Child ticket: £8"); // Ticket price for children
// } else if (age >= 18 && age < 60) {
//     console.log("Adult ticket: £10.95"); // Ticket price for adults
// } else if (age >= 60) {
//     console.log("Senior ticket: £7.50"); // Ticket price for seniors
// }



// let age = 18;

// if (age < 18) {
//     console.log("Child ticket: £8"); // Print price for children
// } else if (age >= 18 && age < 60) {
//     console.log("Adult ticket: €10.95"); // Print price for adults
// } else if (age >= 60) {
//     console.log("Senior ticket: €7.50"); // Print price for seniors
// } else {
//     console.log("Invalid age"); // Handle unexpected cases
// }

// let age = 18;
// let ticketPrice;

// if (age < 18) {
//     ticketPrice = "Child ticket: £8";
// } else if (age >= 18 && age < 60) {
//     ticketPrice = "Adult ticket: £10.95";
// } else if (age >= 60) {
//    ticketPrice = "Senior ticket: £7.50";
// } else {
//     ticketPrice = "Invalid age";
// }

// console.log(ticketPrice);

// const favColor = (color) => {
//     console. log(`My favourite color is ${color} `)
// }
// //favColor()


// const checkTicketPrice = (age) =>{
//     if(age < 18){
//         console. log("young")
//     } else{
//         console.log("older")
//     }
// }

// checkTicketPrice()
// checkTicketPrice()
// checkTicketPrice()

// const addUp = (num1, num2) => {
//     return num1 + num2
// }

// addUp(2,3)
// console.log(addUp(4, 5))

// if (addUp(3,4)>10){
//     console.log("bigger than 10")
// }else {
//     console.log("not")
// }

//ACTIVITY 1

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

//console.log(factorial(33));

// function syntax
const computeFactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1; // factorial of 0 or 1 is 1
    } else {
        return n * computeFactorial(n - 1); // Recursive case: n * factorial of (n-1)
    }
};


console.log("The factorial of 33 is " + computeFactorial(33));



//ACTIVITY 2

// Initialize the order count
let orderCount = 0;

// Define the takeOrder function with two parameters
const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
    console.log(`Order count is now: ${orderCount}`);
};


takeOrder("pineapple", "ham");
takeOrder("mushrooms", "pepperoni");

//ACTIVITY3


let balance = 1000;

// Cash machine function
const cashMachine = (inputPin, withdrawAmount, correctPin) => {
    // Check if the entered PIN is correct
    if (inputPin === correctPin) {
        // Check if the balance is sufficient
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            console.log(`Success! You have withdrawn £${withdrawAmount}. Your new balance is £${balance}.`);
        } else {
            console.log("Insufficient funds. Please check your balance.");
        }
    } else {
        console.log("Incorrect PIN. Please try again.");
    }
};

// Define a PIN (could be set from user input in a real application)
const correctPin = 5678;

// Example usage
cashMachine(5678, 500, correctPin);  // Correct PIN and sufficient balance
cashMachine(5678, 600, correctPin);  // Correct PIN but insufficient balance
cashMachine(1234, 100, correctPin);  // Incorrect PIN