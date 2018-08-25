let selectedToppig: string = 'pepperoni';

function selectTopping(topping: string): void {
    selectedToppig = topping;
}

selectTopping('bacon');

console.log(selectedToppig);