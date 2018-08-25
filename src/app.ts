interface Pizza {name: string, sizes: string[]};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {name, sizes};
}

pizza = createPizza('Pepparoni', ['small', 'medium']);

// interface is a kind of contract between variable and type | shape of the type
// that we are concentually telling typescript as what the variable look like