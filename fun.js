// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArry = [1,3,4,56]
// const ans = findTarget(myArry, 57)
// console.log(ans);

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b =0;
//     }
//     return a+b;
// default parameters

// function addTwo(a,b=0){
//     return a+b;
// }
// const ans = addTwo(4,9);
// console.log(ans);

// Rest Parameters
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is`, c);
// }
// myFunc(3,4,5,6);
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
// const ans = addAll(4,5,4);
// console.log(ans);
ans=addAll(15,5,14);
console.log(ans);
