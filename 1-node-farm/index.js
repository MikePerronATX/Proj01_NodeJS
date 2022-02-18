const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////
//Files
///////////////

//blocking synchronous
/* const textIn  = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log('File written!'); */

//non-blocking asynchronous
/* fs.readFile('./starter/txt/starrrrrt.txt', 'utf-8', (err, data1) =>{//incorrect file name making the error message occur
    if (err) return console.log('ERROR!💥');
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) =>{
        console.log(data2);
        fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) =>{
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written 😄');
            })
        });
    });
});
console.log("Will read file"); */


///////////////
//Server
///////////////
const server = http.createServer((req, res) => {

    /* res.end('Hello from the server!'); */


    //console.log(req.url);
    const pathname = req.url;

    if(pathname === '/' || pathname === '/overview'){
        res.end('This is overview');
    } else if (pathname === '/product'){
        res.end('This is the product');
    } else {
        res.writeHead(404)
        res.end('Page Not Found!');
    }
});

/*     res.end('Hello from the server!');
}); */


server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000' );
});