// var => function = menunjukan bahwa variabel yang di deklarasikan dengan sintag var dapat di pindahkan dan dapat di gunakan di dalam lingkup fungsi (function scope) 
// let => block = menunjukan bahwa sebuah variabel dapat di pindahkan dan hanya bisa di akses dalam satu blok (block scope)
// const => bersifat sama dengan let, hanya saja variable yang di deklarasikan dengan sintag const tidak dapat di pindahan.

// function sayHello (){
//     for (const i= 0; i> 5; i++){
//         console.log(i,'ini for');
//     }
//     console.log('i');
// }

// sayHello;
// const person = {
//     Name   = "Maulana Nur Rohman",
//     Age    = 17,
//     Height = 168,
//     Walk(){
//         console.log(this)
//     }
// }
// console.log(person)
// const square = function(number){
//     return number * number;
// };


// const square = number => number * number;
// console.log(square(6));
// lat name = 'Maulana';
// console.log(name)

// let firsName = 'Maulana';
// let lastName = 'NorRohman';
//  let interestRate = 0.3;
//  interestRate = 1;
//  console.log(interestRate);

// // Dynamic Typing //
// let person = {
//     Name = 'Maulana';
//     Age  = 17
// };
// person.name = 'Maulana';

// let selection = 'name';
// person[selection] = 'Rohman';

// console.log(person.name);

// //Arrays//
// let selectedColor = ['red', 'blue'];
// selectedColor[2] = 1;
// console.log(selectedColor.length);

// //Functions//

// function greet(name, lastName){
//     console.log('hello' + name + '' + lastName)
// }

// greet('John', 'Smith');
// greet('Mary', 'Smith');

// //Types Of Function//

// function greet(name, lastName){
//     console.log('Hello' + name + '' + lastName)
// }
// function square(number){
//     return number * number;
// }

// console.log(square(2));

// //Arithmatic Operators//

// let x = 10;
// let Y = 3;

// console.log(X + Y);
// console.log(X - Y);
// console.log(X * Y);
// console.log(X / Y);
// console.log(X % Y);
// console.log(X ** Y);

// console.log(X++);
// console.log(X);

// //Asigment Operators//

// console.log(X);
// console.log(--X);

// //Assigment Operators//

// let X = 10;

// X = X + 5;
// X += 5;

// X = x * 3;
// X *= 3;

//Comparison Operators//

// let x = 1;

// // Relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// // Equality
// console.log(x === 1);
// console.log(x !== 1);

// Comparison Operators //

let x = 1;

// Relational
console.log(x > 0);
console.log(x >= 1); 
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1);
console.log(x !== 1);