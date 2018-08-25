abstract class Sizes {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

class Pizza extends Sizes {
    toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['medium', 'large']);
pizza.addTopping('pepperoni');

console.log(pizza.availableSizes);

pizza.updateSizes(['large']);
console.log(pizza.availableSizes);

// you cannot instantiate an abstract class