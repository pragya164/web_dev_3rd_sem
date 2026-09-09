//to store data in file,......

/* 
const fs = require(`node:fs`);    //required keywordsto use built in file.
 try{
    const content='This is written synchronously';
    fs.writeFileSync('output.txt', content, 'utf8');
    console.log('File written successfully!');

 } catch(err){
    console.error(err);
 }
    */


 //
 const http= require('http'); //loads the http modules
 http.createServer((request , response)=>{
    //1. thellls the brouse everything is OK (status code 200), and the data is in plane text.
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });    //2. write an announce dtext to the body of the page.

 response.write('Hello world!\n');
 //3. Tell the server that all response header and body have been sent.
 response.end();
  }).listen(1338);    //4. Tells the server thet what port to be 0.