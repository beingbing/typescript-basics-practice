const pizzaCost: number = 10;

const pizzaToppngs: number = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5*toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppngs);

console.log(`Pizza costs: ${cost}`);