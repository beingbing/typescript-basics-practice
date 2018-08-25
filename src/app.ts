// a class is syntactical sugar for creating our own constructor functions
// and prototypal inheritance

class Pizza {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

// function Pizza(name: string) {
//     this.name = name;
//     this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//     this.toppings.push(topping);
// };

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);