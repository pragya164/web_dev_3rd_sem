//npm- node package manager


const f=require("fs")
console.log("data1");
console.log("data2");

f.writeFileSync(" Pragya.txt", "hello to all, i am Pragya Singh");
console.log("data3");
console.log("data4");

f.promises.writeFile("file_out.txt", "new data", "utf-8")
.then(console.log("file successfully created"))
.catch((err)=>console.log(err))
