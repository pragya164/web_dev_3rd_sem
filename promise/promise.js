/*

let promise=new Promise((resolve,reject)=>{
    console.log("I am new promise");
    resolve("successfully done");
});
*/

/*
function GetData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DataID",dataId);
            resolve("successful");
        },8000);
    });
}
let r=GetData(123);      //calling of function

*/


/*

const GetPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a  promise");
        resolve("successful");
        reject("network error");
    });
};
let promise=GetPromise();
promise.then(()=>{
    console.log("promise is fullfilled");
});
promise.catch(()=>{
    console.log("network is not working properly")
});
*/


// function hello(){
//     console.log("Hello");
// }


function GetData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        },3000);
    });
}
GetData(1)
.then((res)=>{
    return GetData(2);})
.then((res)=>{
    return GetData(3);})
.then((res)=>{
    return GetData(4);})