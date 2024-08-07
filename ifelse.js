//let weather = "rainy"

//if (weather != "sunny"){
    //console.log("i'd better wear suncream")}
    //else if ("weather == rainy") {
        //console.log("I'd bring a brolly")
    
    //else if ("weather == snowy") {
       // console.log(" I will get my sledge out")}
        //else{
            //console.log("It could go either way")};

//let diceNum = 6;

//if (diceNum == 6){
    //console.log ("YOU WIN!!!!")
//} else if (diceNum == 1) {
        //console.log("YOU LOSE")
    //} else {
       // {console.log (" Try again")
    //}
//}


//let diceNum = Math.floor(Math.random()*6);
//HTMLFormControlsCollection.log("`you rolled a ${diceNum}`")
//if (diceNum > 4){
  //  console.log ("YOU WIN!!!!")
//} else if (diceNum == 1) {
       // console.log("YOU LOSE")
    //} else {
       // {console.log (" Try again")
    //}
   // }

    //let place = " Manc";
    //let weather = "cloudy";

   // if (place == "Manc" && weather =="sunny" ){
       // console.log("check again....")
    //}else if (place == "Manc" && weather =="Rainy" ){
       // console.log("obviously .......")
    //} else{
       // console.log ("what?? It isn't raining")}

       //let diceNum = 2;

      // switch(true){
      // case diceNum < 4:
           // console.log("Roll again")
          //  break;
         //  default:
         //   console.log("Roll again")

       //}

     

    // Step 1: Array with up to 5 of my favourite film
    
//     let favoriteFilms = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Inception"];

// // Step 2: Add 2 more films 
// favoriteFilms.push("The Matrix", "Interstellar");

// // Step 3: Use a loop to cycle through the array
// for (let i = 0; i < favoriteFilms.length; i++) {
//   //  console.log(favoriteFilms[i]);
// //}

//ACTIVITY 1

let age = 38;
let country = "UK";

// If statement to check age and country
if (age > 17 && country === "UK") {
  console.log("Yes I can serve you");
} else {
  console.log("You aren’t old enough");
}

//ACTIVITY 2

let topping = "Cheese";

switch (topping) {
  case "Cheese":
  case "Tomato":
  case "Mushrooms":
    console.log("These are important ingredients for my pizza.");
    break;
  case "Chicken":
  case "Olives":
  case "Onions":
    console.log("I don't mind having ${topping} on my pizza.");
    break;
  default:
    console.log("${topping} should not be on a pizza.");
}

//ACTIVITY 3

// variable for the password
let password = "mypassword";

// Check the number of characters in the password
if (password.length < 8) {
  // If the password is less than 8 characters, log that it's too short
  console.log("The password is too short.");
} else {
  // Otherwise, log the password
  console.log("The password is: " + password);
}

// Change the value of the password variable and check again
password = "newpassword123"; 
if (password.length < 8) {
  // If the password is less than 8 characters, log that it's too short
  console.log("The password is too short.");
} else {
  // Otherwise, log the password
  console.log("The password is: " + password);
}

// Define a numeric variable
let num = 15;

// Check if the number is divisible by 3 or 5
if (num % 3 === 0 || num % 5 === 0) {
  // If the number is divisible by 3 or 5, log this message
  console.log("This number is divisible by 3 or 5.");
} else {
  // Otherwise, log that it's not divisible by 3 or 5
  console.log("This number is not divisible by 3 or 5.");
}

// Change the value of the num variable and check again
num = 7; // Here you can enter a new number
if (num % 3 === 0 || num % 5 === 0) {
  // If the number is divisible by 3 or 5, log this message
  console.log("This number is divisible by 3 or 5.");
} else {
  // Otherwise, log that it's not divisible by 3 or 5
  console.log("This number is not divisible by 3 or 5.");
}


//ACTIVITY 4

let Num = 18
if (Num % 3 === 0 && Num % 5 === 0) {
    console.log("fizz buzz");
} else if (Num % 3 === 0) {
    console.log("fizz");
} else if (Num % 5 === 0) {
    console.log("buzz");
} else {
    console.log(Num);
}    

//ACTIVITY 5

let palindromeNum = 20202;

let palindromeStr = palindromeNum.toString();

if (palindromeStr === palindromeStr.split('').reverse().join('')) {
    console.log(`${palindromeNum} is a palindrome.`);
} else {
    console.log(`${palindromeNum} is not a palindrome.`);
}


//ACTIVITY 6

let time = 8; 
let placeOfWork = "Office";
let townOfHome = "Hometown";

if (time >= 7 && time < 9) {
    console.log(`At ${time} I'm at home in ${townOfHome}.`);
} else if (time >= 9 && time < 17) {
    console.log(`At ${time} I'm at work in ${placeOfWork}.`);
} else if (time >= 17 && time < 19) {
    console.log(`At ${time} I'm commuting.`);
} else if (time >= 19) {
    console.log(`At ${time} I'm at home in ${townOfHome}.`);
} else {
    console.log(`At ${time} I'm still asleep.`);
}


//ACTIVITY 7

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// Print the length of the string
console.log(`The length of the string is: ${str.length}`);

// Define vowels
const vowels = 'aeiou';

// Initialize a variable to store the index of the last vowel
let lastVowelIndex = -1;

// Check for the last vowel using lastIndexOf method for each vowel
for (let i = 0; i < vowels.length; i++) {
    const vowel = vowels[i];
    const index = str.lastIndexOf(vowel);
    if (index > lastVowelIndex) {
        lastVowelIndex = index;
    }
}

// Print the result
if (lastVowelIndex === -1) {
    console.log("No vowels found in the string.");
} else {
    console.log(`The index of the last vowel is: ${lastVowelIndex}`);
}





