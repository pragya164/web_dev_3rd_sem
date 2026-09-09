/* function menu(a,b){
    let add, sub, multiply, divide;
    add=a+b;
    sub=a-b;
    multiply=a*b;
    divide=a/b;
    console.log(`Addition: ${add} Subtration: ${sub} multiplication: ${multiply} divition: ${divide}`)

}
// calculator(100,5);

function calculator(callback){
    callback(100,5);
}
calculator(menu); */




console.log("one");
console.log("two");
console.log("three");

setTimeout(function(){
    console.log("Hello after 5 second");
}, 5000);

console.log("four");
console.log("five");

setTimeout(()=>{
    console.log("Hello after 3 second");
}, 3000);


//3.Real life-Example-
function welcome(){
    console.log("Welcome to javascript");
}
setTimeout(welcome, 2000);   //callback function.



//4. Passisng Arguments...(you can also pass argunents using finctions)
function greet(f_name, l_name){
    console.log("Hello "+ f_name+l_name);
}

setTimeout(greet, 4000, "Pragya ", "singh");