
const fs = require("fs");
//it make and write in file
fs.writeFileSync("html/0.010 javascript file io/file.txt", "hello \nhi");
//it read file
let file = fs.readFileSync("html/0.010 javascript file io/file.txt");
console.log("without tostring :",file);
let fil = fs.readFileSync("html/0.010 javascript file io/file.txt").toString();
console.log("with tostring :",fil);

//this write in the created file
fs.appendFileSync("html/0.010 javascript file io/file.txt", "\nhello1");
