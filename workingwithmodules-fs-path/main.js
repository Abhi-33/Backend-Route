const fs = require('fs');

console.log(fs);

console.log("starting");
// fs.writeFileSync("Abhishek.txt" , "Abhishek is a good boy");
fs.writeFile("Abhishek2.txt" , "Abhishek is again a good boy", ()=>{
    console.log("done");
    fs.readFile("Abhishek2.txt" , (error , data)=>{
        console.log(error , data.toString());
    })
    fs.appendFile("Abhishek2.txt" ,"Abhishek" ,  (e,d)=>{
        console.log(d);
    })
});
console.log("Ending");

fs.writeFile("Abhishek3.txt" , "This is the third time abhishek is good boy" , ()=>{
    fs.appendFile("Abhishek3.txt" , "New string appended" , (e,d)=>{
        console.log(e,d);
    })
})