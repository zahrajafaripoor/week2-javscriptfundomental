// let newPerson = {
//     name: "Zahra",
//     age: 38,
//     sayHi(){
//         //console.log(this.name)
//         //return this.name
//         return `Hi I'm ${this.name} and I am ${this.age}years old`
//     }
// }

// console.log (newPerson.sayHi())

//console.log( person["chosenKey"])

// person.age= 200
// person.gender = "Male"
// person.favSong = ["We will rock you","Welcome to the jungle"]


// console.log( person.sayHi() )
//console.log( person["chosenKey"])

//ACTIVITY 1

let newPerson = {
    name: "Zahra",
    age: 38,
    sayHi(){
        //console.log(this.name)
        //return this.name
        return `Hi I'm ${this.name} and I am ${this.age} years old`
    }
}

console.log (newPerson.sayHi())

//ACTIVITY 2

let Pet = {
    name: "Lili",
    typeofPet: "cat",
    age: 5,
    color: "white",
    
    // Method to describe eating
    eat() {
        return `${this.name} is eating.`;
    },
    
    // Method to describe drinking
    drink() {
        return `${this.name} is drinking.`;
    }
};

console.log(Pet.eat()); 
console.log(Pet.drink());


//activity 3

let coffeeShop = {
    branch: "Central",
    drinks: { 
        latte: 2.50, 
        americano: 2.00, 
        espresso: 1.75 
    },
    food: { 
        sandwich: 3.50, 
        cake: 2.75 
    },
    // drinks orders

    drinksOrdered: function() {
        // Array of drinks to be ordered

        let order = ['latte', 'americano'];
        let totalCost = 0;
        let orderDetails = "Your drinks order is: ";

        // Loop 
        for (let drink of order) {
            // Order details string

            orderDetails += `${drink.charAt(0).toUpperCase() + drink.slice(1)} (£${this.drinks[drink].toFixed(2)}), `;

            // total cost
            totalCost += this.drinks[drink];
        }

        // Add the total cost to the order details
        orderDetails += `Total cost: £${totalCost.toFixed(2)}.`;
        return orderDetails;
    },
    //  food orders

    foodOrdered: function() {
        // Array of food items to be ordered

        let order = ['sandwich', 'cake'];
        let totalCost = 0;
        let orderDetails = "Your food order is: ";

        // Loop 

        for (let item of order) {
 // order details string

            orderDetails += `${item.charAt(0).toUpperCase() + item.slice(1)} (£${this.food[item].toFixed(2)}), `;
            // Accumulate the total cost
            totalCost += this.food[item];
        }

        // Add the total cost to the order details
        orderDetails +=`Total cost: £${totalCost.toFixed(2)}.`;
        return orderDetails;
    }
};


console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());