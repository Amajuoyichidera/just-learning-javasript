
// let btn = document.querySelector("#btn") 

// function myalert () {
//     alert ("how are you")
// }
// btn.onclick = myalert 


// (PRIMITIVE TYPES)
// strings
// let phrase = "I am going home"
// let phrase2 = 'I dey come'
// let phrase3 = `${phrase2} I don show`
// console.log(phrase3);
// // numbers
// let  noOfPens = 30
// // booleans
// let rainySeason = false;
// // null
// let empty =  null;
// // undefined
// // bigInt
// let bigNumber = 2e56
// // symbol
// let unique = Symbol(1)
// let unique2 = Symbol(1)
// console.log(unique);

// // // (REFERENCE/OBJECT TYPES)
// // // objects
// let person = {
//   name: 'chidera',
//   skinColor: 'fair',
//   age: 18,
//   occupation: 'webDeveloper'
// }

// console.log(person);

// let bottle = {
//   height: 100,
//   width: 40,
//   brand: 'coca Cola',
//   name: 'eva',
//   price: 150,
// }
// // DOT Notation
// console.log(bottle.name);

// // square Bracket Notation
// console.log(person['the person property you want to access']);
// console.log(person['skinColor']);

// alert  for showing messages
// alert ('some messages')
// prompt for collecting messages
// let answer= prompt('What is your Name'?', 'amajuoyi chidera')
// alert(`your name is ${answer}`)
// confirm to confirm something
// let confirmation = confirm('Are you sure?')
// alert(confirmation)

// while (true) {
//   let answer = prompt('what is your name', 'amajuoyi chidera')
//   if (answer === null || answer === 'amajuoyi chidera') {
//     alert('sorry.choose another name')
//     continue;
//   } else {
//     let confirmation = confirm(`are you sure your name is ${answer}`)
//     if (confirmation) {
//       alert(`welcome, ${answer}`)
//     } else {
//       alert('fuck off')
//       continue;
//     }
//     break;
//   }
// }


// // arrays
// let fruits = ['mango','agbalumo','apple','banana','pear',]
// console.log(fruits[4]);
// console.log(fruits.length);
// console.log(fruits[fruits.length - 3]);

// // maps
// advanced objects with unique properties
// // sets
// a list with unique values

// console.log('hello world');
// let name = 'chidera'; // string literal
// let age = 30; // Number literal
// let isApproved = false; // Boolean literal
// // console.log ('name');

// let me = {
//     name: 'chidera',
//     age: '18',
// }
// // Dot Notation
// me.name = 'David';   // to change the person property for instance name 
// // Bracket Notation
// me['name'] = 'kingsley'
// console.log(me.name);

// Arrays 
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'pink';
// console.log(selectedColors);

// function performing a task
// function greet(name, lastName) {
//     console.log('Hello ' + name, '' + lastName);
// }
// greet('john','smith');
// // calculating a value 
// function square(number) {
//   return number * number;
// }
// console.log(square(2));


// if and else statements 

// let youLikeMeat = true;

// if (youLikeMeat) {
//   document.write("yeah you like meat");
// }else{
//   document.write("fuck off")
// }

// let myNum = 10;

// if (myNum > 10) {
//   document.write("myNum is greater than 10");
// }
// you either use > or == i.e the first code block or the second code block.
// if (myNum == 20) {
//   document.write("true , big man");
// } else{
//   document.write("false, abeg shift");
// }

// else and if statements

// let myAge = 39;
// if (myAge > 30) {
//   document.write("liar you are 18 years and not over 30");
// } else if (myAge > 20){
//   document.write("you are over 20");
// } else if (myAge > 10){
//   document.write("you are over 10");
// } else{
//   document.write("you are not over 10");
// }


// logical operators

// && and     
// Here myAge must pass the two condition required
// let myAge = 25;
// if (myAge >= 18 && myAge <= 30) {
//   document.write("you can come, you cool dude");     
// } else {
//   document.write("fuck off, you aint coming");
// }

// ||  or
// Here myAge must pass either of the two conditions required
let myAge = 25;
 if (myAge < 18 || myAge > 30) {
   document.write("abeg shift");
  } else {
   document.write("come in buddy");
 }
