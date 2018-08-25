interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvailableSizes(): string[];
};

// difference between type declaration and interface declaration for functions
// type getAvailableSizes = () => string[];

let pizza: Pizza;

function createPizza(name: string, sizes: string[]) : Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    } as Pizza;
}

pizza = createPizza('Pepparoni', ['small', 'medium']);

pizza.toppings = 1
// interface is a kind of contract between variable and type | shape of the type
// that we are concentually telling typescript as what the variable look like