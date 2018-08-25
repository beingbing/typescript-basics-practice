const pizza = {name: 'Papperoni', price: 15, getName() {return this.name}};

console.log(pizza.getName());

const toppings = ['papperoni'];

// const order = {
//     pizza: pizza,
//     toppings: toppings
// };

const order = { pizza, toppings };

console.log(order);