interface SizesInterface {
    availableSizes: string[];
}

// only public properties of a class can be present in its interface, 
// hence, 'sizes' can not be included in the interface

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
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