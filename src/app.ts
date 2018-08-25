const pizzas = [
    {name: 'Papperoni', toppings: ['papperoni']}
];

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getname: () => pizza.name
};

console.log(pizza.getname());