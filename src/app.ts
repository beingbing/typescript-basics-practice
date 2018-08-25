class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);

// invoke getter
console.log(sizes.availableSizes);

// invoke setter
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);

// setters and getters are always public

// a class is syntactical sugar for creating our own constructor functions
// and prototypal inheritance

class Pizza {
    toppings: string[] = [];

    constructor(readonly name: string) {}

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
console.log(pizza.name);
console.log(pizza);

// readonly properties can only be initialized at the declaration, they can't be
// changed after that.