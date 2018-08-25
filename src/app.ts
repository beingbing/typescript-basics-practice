// type Pizza = {name: string, toppings: number};

// const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5};

// const serialize = JSON.stringify(pizza);

// function getNameFromJSON(obj: string) {
//     return (<Pizza>JSON.parse(obj)).name;
// }

// getNameFromJSON(serialize);

type Pizza = {name: string, toppings: number};

const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5};

const serialize = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialize);