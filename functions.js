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

let age = 18;
let ticketPrice;

if (age < 18) {
    ticketPrice = "Child ticket: £8";
} else if (age >= 18 && age < 60) {
    ticketPrice = "Adult ticket: £10.95";
} else if (age >= 60) {
   ticketPrice = "Senior ticket: £7.50";
} else {
    ticketPrice = "Invalid age";
}

console.log(ticketPrice);

const favColor = (color) => {
    console. log(`My favourite color is ${color} `)
}
//favColor()


const checkTicketPrice = (age) =>{
    if(age < 18){
        console. log("young")
    } else{
        console.log("older")
    }
}

checkTicketPrice()
checkTicketPrice()
checkTicketPrice()

const addUp = (num1, num2) => {
    return num1 + num2
}

addUp(2,3)
console.log(addUp(4, 5))

if (addUp(3,4)>10){
    console.log("bigger than 10")
}else {
    console.log("not")
}

