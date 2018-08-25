const pizza = {
    name: 'pepperoni',
    toppings: ['pepperoni'],
};

function order({name: pizzaName, toppings: pizzaToppings}: any) {
    return {pizzaName, pizzaToppings};
}

const { pizzaName } = order(pizza);

const toppings = ['pepperoni', 'bacon', 'chilli'];

// const firstItem = toppings[0];

const [first, second, third] = toppings;

console.log(first, second, third);

function logToppings([first, second, third]: any) {
    console.log(first, second, third);
}

logToppings(toppings);