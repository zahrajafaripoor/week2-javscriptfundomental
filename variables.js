console.log("all around the world".charAt(7))

// charAt uses 0-index for counting the characters 
//let i=10;

//console.log(i)

//i = i ** 5;

//console.log(i)

//let count = 10;

//count -= 2;

//console. log(count)

//let myCounter = 10;

//let favouriteDrink ="coffee";

//console.log("My favourite drink is"+ favouriteDrink);

//let name ="Zahra"
//let age = 38 ;
//let favDrink="Tea"



//console.log("Hi. my name is " + name + ". My age is" + age + " and my favourite drink is " + "favDrink")

// This is using the TEMPLATE LITERALS
//console.log(`Hi. My name is ${name} . My age is ${age} and my favourite drink is ${favDrink}`)

//age = 102;
//favDrink = "Gin and tonic";

//console.log(`Hi. My name is ${name} . My age is ${age} and my favourite drink is ${favDrink}`)

// ACTIVITY 1

// Store initial information
let name = "Zahra";
let age = 38;
let favouriteColour = "purple";

// Log the complete sentence using Template Literals
console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}.`);

// Update the variables
name = "Sara";
age = 30;
favouriteColour = "green";

// Log the new sentence
console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}.`);


// ACTIVITY 2


// Log today's meals to the console
// Store what you eat today
let breakfast = "Pancakes";
let lunch = "chicken and rice";
let dinner = "Pasta";

// Log today's meals to the console
console.log(`Today I ate ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// Update each of these variables to what you will eat tomorrow
breakfast = "Egg";
lunch = "Salad";
dinner = "Pizza";

// Log tomorrow's meals to the console
console.log(`Tomorrow I will eat ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);


//ACTIVITY 3

// Step 1: Create a Date object for today
let dateToday = new Date();

// Step 2:  Date object for the next occurrence of my birth date
let currentYear = dateToday.getFullYear();
let nextBirthDate = new Date(currentYear,12, 22); // October is month 9 in JavaScript (0-indexed)
if (dateToday > nextBirthDate) {
    nextBirthDate.setFullYear(currentYear + 1);
}

// Step 3:  the difference in time
let timeDifference = nextBirthDate - dateToday;

// Step 4: Convert the difference from milliseconds to days
let daysDifference = timeDifference / (1000 * 60 * 60 * 24);

// Step 5: Output the result
console.log(Math.ceil(daysDifference) + " days until your next birth date.");



//ACTIVITY 4

// Create 9 variables and assign 'X', 'O', or ' ' to each
let space1 = 'X';
let space2 = 'O';
let space3 = ' ';
let space4 = 'x';
let space5 = 'X';
let space6 = ' ';
let space7 = 'O';
let space8 = ' ';
let space9 = '';

// Display the Tic-Tac-Toe board using the variables
console.log(`
 ${space1}  | ${space2} |||${space3} 
-----------
 ${space4} | ${space5} | ${space6} 
-----------
 ${space7} | ${space8} | ${space9} 
`);




