// let fruits = ["Mango", "banana", "Grapes"];
// console.log(fruits);
// //push
// // fruits.push("lichi");
// // console.log(fruits);

// //pop
// // let popped = fruits.pop();
// // console.log(fruits);

// //unshift
// // fruits.unshift("apple");
// // console.log(fruits);

// //shift
// let newq = fruits.shift();
// console.log(fruits);
// console.log(newq);

let arr1 = ["item1", "item2"];
// let arr2 = arr1.slice(0);
// let arr2 = arr1;
// let arr2 = [].concat(arr1);
let arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
arr1.push("item3");
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);

