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

const coffeeShop = {
    branch: "Costa",
    drinks: {
        coffee: 2.00,
        tea: 1.50,
        latte: 3.00,
        americano: 2.50
    },
    food: {
        cake: 4.00,
        croissant: 2.50,
        rice: 3.50,
        chickenKebab: 5.00
    },
    drinksOrdered(orderedDrinks) {
        let total = 0;
        let orderDetails = "Your drink order is:\n";

        for (const drink of orderedDrinks) {
            if (this.drinks[drink] !== undefined) {
                total += this.drinks[drink];
                orderDetails += `${drink.padEnd(15)} £${this.drinks[drink].toFixed(2)}\n`;
            } else {
                orderDetails += `Sorry, we don't serve ${drink}.\n`;
            }
        }

        orderDetails += `\nTotal: £${total.toFixed(2)}`;
        return orderDetails;
    },
    foodOrdered(orderedFood) {
        let total = 0;
        let orderDetails = "Your food order is:\n";

        for (const food of orderedFood) {
            if (this.food[food] !== undefined) {
                total += this.food[food];
                orderDetails += `${food.padEnd(15)} £${this.food[food].toFixed(2)}\n`;
            } else {
                orderDetails += `Sorry, we don't serve ${food}.\n`;
            }
        }

        orderDetails += `\nTotal: £${total.toFixed(2)}`;
        return orderDetails;
    }
};


console.log(coffeeShop.drinksOrdered(["coffee", "latte", "tea", "smoothie"]));


console.log(coffeeShop.foodOrdered(["cake", "rice", "burger"]));