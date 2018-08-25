// const date = +new Date();
// console.log(date);
// this is called instance method

// const date = Date.now();
// console.log(date);
// this is called static method

class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));