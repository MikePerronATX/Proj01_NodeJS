const fs = require('fs');

//blocking synchronous
const textIn  = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log('File written!');

//non-blocking asynchronous
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) =>{
    console.log(data);
});