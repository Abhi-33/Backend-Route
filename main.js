// const { createServer } = require('node:http'); //http is a module which we get by default 

// import http from "http"
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World!, My name is abhishek vashisth</h1>'); 
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// NodeJS automatically wraps all the commonJS module code inside this function.
// (function(exports , require ,module , __filename , __dirname){
//     //Module code actuallly lives here
// })


// Below are the ES6 method of importing modules setting the type : module in package.json

// import {a,b ,d}from "./myModule.js"        
// console.log(a ,b ,d);

// import Abhishek from "./myModule.js"
// console.log(Abhishek);

// Below is the commonJS type of importing modules using require 
// const a = require("./myModule2.js");
// console.log(a , __dirname , __filename);
