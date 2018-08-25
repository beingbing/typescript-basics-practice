class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

class Pizza extends Sizes {
    toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
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

const pizza = new Pizza('Pepperoni', ['medium', 'large']);
console.log(pizza.availableSizes);
pizza.addTopping('pepperoni');
console.log(pizza.name);
console.log(pizza);

// readonly properties can only be initialized at the declaration, they can't be
// changed after that.