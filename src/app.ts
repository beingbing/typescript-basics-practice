// function sumAll(arr: any) {
//     return arr.reduce((prev: any, next: any) => prev + next);
// }

// const sum = sumAll([1,2,3,4,5,6,7,8,9,10]); 

// console.log(sum);

function sumAll(message: any, ...arr: any[]) {
    console.log(message);
    console.log(arguments);
    return arr.reduce((prev: any, next: any) => prev + next);
}

const sum = sumAll('hello',1,2,3,4,5,6,7,8,9,10); 

console.log(sum);