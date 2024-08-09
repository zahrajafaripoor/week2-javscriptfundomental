// let coffeeShop = {
//     branch: "costa",
//     drinksList: ["coffee", 2.50, "tea", 1.50],
//     foodList: ["cake", 3.00, "croissant", 2.50],
//     drinksOrdered(drink) {
//         let total = 0; // Variable to keep track of the total cost

//         for (let i = 0; i < drink.length; i++) {
//             let indexOfItem = this.drinksList.indexOf(drink[i]);

//             if (indexOfItem !== -1) {
//                 let price = this.drinksList[indexOfItem + 1];
//                 console.log(drink[i] + " £" + price.toFixed(2)); // Display the drink and its price
//                 total += price; // Add the price to the total
//             } else {
//                 console.log(drink[i] + " is not available."); // Message if the drink is not available
//             }
//         }

//         // Display the total cost with two decimal places and a newline
//         console.log("\nTotal: £" + total.toFixed(2) + "\n");
//     }
// }

// coffeeShop.drinksOrdered(["coffee", "tea", "coffee"]);



const coffeeShop = {
    branch: "Costa",
    menu: {
        coffee: 2.00,
        tea: 1.50,
        cake: 4.00
    },
    order(orderedItems) {
        let total = 0;
        let orderDetails = `${this.branch} Receipt\n`;

        for (const item of orderedItems) {
            if (this.menu[item] !== undefined) {
                total += this.menu[item];
                orderDetails += `${item.padEnd(15)} £${this.menu[item].toFixed(2)}\n`;
            } else {
                orderDetails += `Sorry, we don't serve ${item}.\n`;
            }
        }

        orderDetails +=`\n${"Total".padEnd(15)} £${total.toFixed(2)}`;
        return orderDetails;
    }
};


console.log(coffeeShop.order(["coffee", "tea", "cake", "sandwich"]));
    