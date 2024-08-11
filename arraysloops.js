//let coffeOrder = [
    //"Alex - cortado", 
   // "Ben - Latte",
    //"Charlie - whatever's new"
//]
//console.log (coffeOrder[2]);
//console.log (coffeOrder[1]);

//coffeOrder[1] = "Ann - Hot Choc"
//console.log (coffeOrder);

//console.log (coffeOrder ,length);

//coffeOrder.push("Donna - Espresso")
//console.log (coffeOrder);
//console.log (coffeOrder ,length);



//let multiplesTwo = [];
//for (let i = 0; i<20; i++)

   // if ( i% 2 == 0){
       // multtiplesTwo.push(i);
   // };
   // console.log(`Numbers divisible by 2:${multiplesTwo}`)


   //let age = 12;
   //while (age < 18){
   // console.log("you are a child")
   // age ++
   //}console.log
   // console. log ("you are an adult")
  //let cards = ["Diamon", "Spade", "Heart", "Club"];
  //let currentCard = "Club";

//while (currentCard != "Spade" ){
//console. log (currentCard);
//currentCard = cards [Math. floor (Math. random()*4)];
//console. log (currentcard); }   


//Activity 1

// Step 1: array with 3 favorite Adele songs
let adeleSongs = [
    "Someone Like You", 
    "Rolling in the Deep", 
    "Hello"];


console.log("Initial Adele Songs:", adeleSongs);

// Step 3: Add two more songs to the array
adeleSongs.push("When We Were Young",
     "Set Fire to the Rain");


console.log("Updated Adele Songs:", adeleSongs);

let favSongs = 1
    "Someone Like You"
    "Rolling in the Deep", 
    "Hello"
    for (let i=0; i < favSongs.length ; i++)[
        console.log(favSongs[i])
    ]


 // ACTIVITY 2

   numberOfRandomNumbers = 6;
const min = 1;
const max = 50;

for (let i = 0; i < numberOfRandomNumbers; i++) {
    
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(randomNumber);
}


//ACTIVITY 3

function countDown() {
    console.log('Activity 3: Counting down from 9 to 0');
    for (let i = 9; i >= 0; i--) {
        console.log(i);
    }
}

countDown();

//ACTIVITY 4

const films = ["Inception", "Interstellar", "Ghostbusters", "The Matrix"];

console.log("List of films:");
for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

const thirdFilm = films[2]; // Index 2 is the 3rd item in the array

if (thirdFilm === "Ghostbusters") {
    console.log("Yay it's Ghostbusters");
} else {
    console.log("Boo! We want Ghostbusters");
}

//ACTIVITY 5

// Function to check random numbers
function checkRandomNumbers() {
    const numberOfRandomNumbers = 6;
    const min = 1;
    const max = 30;

    // 6 random numbers
    for (let i = 0; i < numberOfRandomNumbers; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomNumber % 7 === 0) {
            console.log(`The number ${randomNumber} is divisible by 7.`);
        } else {
            console.log(`The number ${randomNumber} is not divisible by 7.`);
        }
    }
}

checkRandomNumbers();

// ACTIVITY 6
// Arrays of followers
const zahraFollowers = ["Sara", "Rose", "Amir", "Reza"];
const maryamFollowers = ["Reza", "Neda", "Noor", "Mona"];

// Loop through both arrays to find matching followers
for (let i = 0; i < zahraFollowers.length; i++) {
    for (let j = 0; j < maryamFollowers.length; j++) {
        if (zahraFollowers[i] === maryamFollowers[j]) {
            console.log(`Mutual follower: ${zahraFollowers[i]}`);
        }
    }
}

//ACTIVITY 7

// //1.For Loop
// //Is used when the number of iterations is known before entering the loop. It is commonly used for iterating over arrays and for a specific number of iterations.

// //Syntax
// //for (initialization; condition; increment) {
//     // code block to be executed
// }

// //Example
// for (let i = 0; i < 5; i++) {
//     console.log("For loop iteration:", i);
// }

// // Pros:
// // - Clear and concise for loops with known iteration counts.
// // - Easy to read and understand the flow of execution.
// // - Initialization, condition, and increment are all in one place.

// // Cons:
// // - Not as flexible for loops where the number of iterations is not known.
// // - Can become less readable with complex conditions or increments.


// // 2.While Loop

// // A while loop is used when the number of iterations is not known before entering the loop. The loop continues as long as the specified condition evaluates to true.

// // Syntax:

// while (condition) {
//     // code block to be executed
// }

// //EXAMPLE:

// let i = 0;
// while (i < 5) {
//     console.log("While loop iteration:", i);
//     i++;
// }

// //Pros:
// // - Flexible, as it can handle loops where the number of iterations is not known beforehand.
// // - Can be used to loop indefinitely if needed, until a specific condition is met.

// // Cons:
// // - Potential for infinite loops if the condition is never met or not properly updated.
// // - Less structured compared to a for loop for known iteration counts.

// //Do...While Loop

// //A do...while loop is similar to a while loop, but it guarantees that the code block will be executed at least once before the condition is tested.

// //Syntax:

// do {
//     // code block to be executed
// } while (condition);

// //EXAMPLE:

// //let i = 0;
// do {
//     console.log("Do...While loop iteration:", i);
//     i++;
// } while (i < 5);

// // Pros:
// // - Ensures the loop body is executed at least once.
// // - Useful when the loop must execute at least once regardless of the condition.

// // Cons:
// // - Can be less intuitive since the condition is checked after the code block is executed.
// // - Similar to while loops, there is a risk of infinite loops if not properly managed.

// // To sum up:
// // - Use a (for loop) when the number of iterations is known and you need a structured way to iterate.
// // - Use a (while loop) when the number of iterations is unknown and you need flexibility.
// // - Use a (do...while loop) when the loop body must be executed at least once before the condition is tested.

// references
// //(Hsu, 2022),(GeeksforGeeks, 2024),(www.naukri.com, 2024),(StudySmarter UK, n.d.)

// // GeeksforGeeks. (2024). Difference between For, While and Do-While Loop in Programming. [online] Available at: https://www.geeksforgeeks.org/difference-between-for-while-and-do-while-loop-in-programming/.

// // Hsu, J. (2022). How to Pick Between a For Loop and While Loop | Built In. [online] builtin.com. Available at: https://builtin.com/software-engineering-perspectives/for-loop-vs-while-loop.

// // StudySmarter UK. (n.d.). While Loop in C: Differences, Infinite Loop, Examples. [online] Available at: https://www.studysmarter.co.uk/explanations/computer-science/computer-programming/while-loop-in-c/.

// // www.naukri.com (2024). Code 360 by Coding Ninjas. [online] Naukri.com. Available at: https://www.naukri.com/code360/library/difference-between-while-and-do-while-loops.