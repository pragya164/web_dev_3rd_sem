// const arr=[1,10,5,8,6];
// for(let i=0; i<arr.length; i++)
// {
//     console.log(`arr elements are:${arr[i]}`);
// }

// /*Types of arr to process:
//     for loop, while loop, do-while loop, for-in, for-of, for-each. 
// */

//  while loop....
//  const arr=[2,13,24,35,46];
//  let i=0;
//  while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// do-while loo...(some error?)
// const arr=[1,23,34,45,56,67];
// let i=0;
// do{
//     console.log(arr[i]);
//     i++
// }
// while(i<arr.lenght);


// for-of loop....
// const arr=[2,3,4];
// for(const element of arr){
//     console.log(element);
// }


// for in loop....
// const arr=[2,3,4,5,6,7];
// for(const element in arr){
//     console.log(arr[element]);
// }

// const arr=["pawani", "pragya","reema", "rashmi"];
// for(const element in arr){
//     console.log(arr[element]);
// }


// function add(a,b){
// dispalyNumbers(arr);

// function displayStudent(student){
//     console.log(student.name);
//     console.log(student.age);

// }
// let student={
//         name: "Pawani",
//         age: 20
//     };


//function with object.....

/*

function displayStudent(student_arr){
    for  (const element of student_arr){
    console.log(element.name);
    console.log(element.age);
    }
}
let student_arr=[{
        name: "Pawani",
        age: 19
    },
    {
        name: "Pragya",
        age: 18
    },
    {
        name: "Khushi",
        age: 19
    }
];

displayStudent(student_arr);

*/

let student = {
    name: "Rahul",
    marks: [80,75,90]
};

function displayStudent(a)
{
    console.log(a.name);
    console.log(a.marks);
}

displayStudent(student);

function calculateTotal(b)
{
    let total = 0;
    
    for(let mark of student.marks)
    {
        total += mark;
    }

    return total;
}

console.log(calculateTotal(student.marks));