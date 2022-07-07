// 1. Define a variable
let MAX_SIZE = 25 * 1024 * 1024;
let title = "Hello World";
title = "Hello ES6";

// sự khác nhau giữa let và const là :
// const Không thể cập nhật lại giá trị của biến trong cùng phạm vi tồn tại
// let có thể cập nhật lại giá trị của biến trong cùng phạm vi tồn tại

// 2. String Interpolation
const user = { name: "David" };
const card = { amount: 7, product: "Bar", unitprice: 42 };
const message = `Hello ${user.name},
want to buy ${card.amount} ${
    card.product
} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(message);

// 3. Rest Parameter
const foo = (x, y,...args) => {
    let a = args.length;
    return (x + y) * a.length;
};
foo(1, 2, "hello", true, 7) === 9;
// 4. Default Parameter Values
const sum1 = (x = 2, y, z) => {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;   
};
console.log(sum1());
// 5. Arrow Functions
const evens = [1, 2, 3, 4, 5, 6];
let odds = evens.map((v) => {
    return v + 1;
});
let pairs = evens.map((v) => {
    return { even: v, odd: v + 1 };
});
let nums = evens.map((v, i) => {
    return v + i;
});
let fives = [];
nums.forEach((v) => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});
// 6. Classes
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
// 7. Modules
//  someApp.js
import {sum,pi} from './utils.js';
console.log(`2π = ${sum(pi,pi)}`); 
//  otherApp.js
console.log("2π = " + sum(pi, pi));

// 8. Promise
const showMessAfterTimeout = (msg, who, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${msg}` + " Hi" + ` ${who}` + " !");
        }, timeout);
    });
};
showMessAfterTimeout("", "Foo", 100)
    .then((msg1) => {
        return showMessAfterTimeout(msg1, "Bar", 200).then((msg) => {
            return msg;
        });
    })
    .then((msg) => {
        console.log("Finish after 300ms:" + msg);
    });

// 9. Loops
//  for...of
const arr = ["1", "2", "3"];

for (const item of arr) {
    console.log(item);
}
// findIndex()
const arr1 = [5, 12, 8, 130, 44];

const number = (item) => item > 20;

console.log(arr1.findIndex(number));
