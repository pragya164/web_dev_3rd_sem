// //ADD TWO NUMBERS AND ADD TWO STRINGS.

// let a,b,c;
// a=5
// b=5
// let add=a+b
// console.log(add);


// a="pragya"
// b="Singh"
// c=a+b
// console.log(c);


// a=10
// b="abc"
// c=a+b
// console.log(c);

// //ARRAY DECLARATION IN JS

// //1. Empty Array
// const arr1[]

// //2. With element.
// const arr2['a', 'b', 'c']

// //3. Array constructor
// const  arr3= new Array('a', 'b', 'c')

// //Mixed element
// const arr4= new Array('a', 10, true,{name:'Pragya'})

// //Array
// const arr5= new Array(5)
// arr5.push(1)

// const Fruits=['Apple','Banana', 'Kivi', 'Banana','Berry', 'Guavava', 'cherry'];
// for(let i=0; i<7; i++){
//     console.log(Fruits[i]);
// }

// Fruits.push('papaya');

// console.log(Fruits[7]);

// const a1=[1,2,3,4,5,6,7]
// a1.slice(2,5)       // slice dose not include last element.
// console.log(a1.slice(2,5));

// const arr=[1,2,3,4,5,6]
// const arr1=arr.splice(0,5) //splice includes last element also.
// console.log(arr1);

// //Adding(concatination).
// const a1=[1,2,3,4]
// const a2=['a','b','c','d']
// const a3=a1.concat(a2)
// // console.log(a2);

// const r=[...a1,...a2, ...a3]  //merge more than two array.
// console.log(r);


// object - keyvalues pairs

// const student={
//     name: "abc",
//     email:"me@gmail.com",
//     roll_no: 1234.
//     // batch: "CSE-26"
// }
// console.log(student); //access whole data
// console.log(student.name); // to call individual element like anme


// //function

// function sum(a,b){
//     let r;
//     r=a+b;
//     return r;
//     console.log("Hello"); //it will not execute after return statment.
// }
// console.log(sum(5,5));


// //Function.
// function greet(f_name , l_name){
//     // let r=f_name+r_name;
//     console.log("good morning " + f_name+l_name);
// }
// let f="pragya"
// let l=" singh"
// greet(f,l);


// //function (another way)...
// function greet(f_name , l_name){
//     console.log(`good morning ${ f_name} ${l_name}`);
// }
// greet("pragya ","singh")

// to print alert msg...

// alert('welcome');
// coonfirm('are you want to exit from here?'); //for confirmation.
// prompt('please enter the value of a') //a will treat as string
//let a=parseFloat(enter the value of b) //parse helps to act as a integer or float value