/*
console.log("Hello everyone");
console.log("I am Pragya Singh");


const fs=require('fs');

try{
      const data=fs.readFileSync('data.txt','utf8');
      console.log(data);
} catch (err) {
      console.log('Error :', err);
}
console.log("i am in my third semester");
console.log("I am doing b/tech in ABES engineering college.");
*/


const fs=require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
      if (err) {
            console.log("Error reading file : ", err);
      return;

}
console.log("File content: ");
console.log(data);
});