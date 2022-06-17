////////////////Основні типи даних/////////

//Boolean type
// let a = true;
// console.log(typeof a);
// console.log(2===2);
// console.log(2===3);

//Null type
// console.log(typeof null); //object - помилка розробників - це просто значення яке означає - пустота, ми можемо
// // присвоїти це значення змінній чи сутності в об'кті
// //наприклад в нас є об'єкт
// let user = {name:'veronika', wife:"null"};
// console.log(user);

//Undefined type
// let a;
// console.log(typeof a) // або ж =>
// console.log(a)  // undefined - ми не можемо присвоїти цей тип даних змінній і тд, це просто означає що змінна не визначена,
// //тобто до неї нічого не присвоєно, з цим типом не можливо робити якісь операції, бо тупо буде випадати помилочка)
//
//Number type
// let num = 5;
// console.log(typeof num);//number - ну я думаю тут ізі, число як число
//
// //BigInt - крч просто довге число, рідко використувується
// //BigInt створюється шляхом додавання n в кінець числа викликом функції BigInt ().
// let big1 = 27625n;
// let big2 = BigInt(27625);
// console.log(typeof big1);
// console.log(typeof big2);

//String type - просто букви, якщо просто,стрічка
// const love = 'i love you';
// console.log(typeof love); //string
// //
// //Symbol type - є ще таке але на то поки забєй, просто запамятай що таке є
//
//Objects
//
// let user = {name: 'Slavko', age: 19};//
// console.log(typeof user);//тупо обєкт, якщо по розумному то це колекція яка містить в собі властивості і методи

//////var let const///
// let t = 4;
// t = 5;
// const y = 4;
// y = 5

//а var тобі отут поясню

// for (let i = 0; i < 10; i++) {
//     var arrayElement = 2;
// }
//
// console.log(arrayElement);

//if else; switch; ternary


//
// let a = 10;
//
// a === 9 ? console.log('ok') : console.log('error');
//
// switch (a){
//     case 10:console.log('ok');
//     break;
//     case 9: cibwd
// }