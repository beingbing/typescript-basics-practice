abstract class Sizes {
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

const pizza = new Pizza('Pepperoni', ['medium', 'large']);
pizza.addTopping('pepperoni');

console.log(pizza.availableSizes);
console.log(pizza.name);
console.log(pizza);

// you cannot instantiate an abstract class