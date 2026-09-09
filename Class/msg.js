//function me jakar call krna...
/*(function msg() 
{
    console.log("hello my name is pragya singh");
})();

//function calling....
msg();
setTimeout(msg,5000);
*/


function msg() {
    console.log("hello my name is pragya singh");
}

msg();              // abhi run hoga
setTimeout(msg, 5000); // 5 second baad run hoga

console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello")
}, 5000);
console.log("three");
console.log("four");



//callback hells(nesting of callback function)
//API get data if we search data it can search and gave us 
function getData(dataID) {
    setTimeout(() => {
        console.log("DataID", dataID)}, 3000);
    }

getData(1);
getData(2);

getData(3);

