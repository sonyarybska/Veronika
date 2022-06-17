///////////////Масиви/////////
// let array = [1,2,3,4,5,6];
//
// for (let i = 2; i <3; i) {
//     const arrayElement = array[i];
// }
//
// for (const number of array) {
//     console.log(number);
// }

// let object = {name:"dhhd", age:15 };
//
// console.log(Object.values(object));
//
// for (const item in object) {
//
// }
//
// let array = [1,0,3,4,5,6];
//
// const t = array.map((value, index, array)=>array); //повертає новий масив
// console.log(t);
//
//  array.forEach(value => console.log(value)) //не повертає
//
// const a = array.filter(value => value>3);//true/false

// const f = array.find(value => value===2);
// console.log(f);

// const a = array.every(value => value === 3);
// const b = array.some(value => value === 10);
// console.log(b);

// const a = array.sort();
// console.log(a);
//
// let array1 = [1,0,3,4,[1,2,3,[3,4,7]],6];
//
// const h = array1.flat(2);
//
// console.log(h);

let array = [1,0,3,4,5,6];

const k = array.reduce((acc, currentValue, index, array) =>acc + currentValue,10);

console.log(k);


