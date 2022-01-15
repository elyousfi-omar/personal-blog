const http = require('http')
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) =>{

    res.setHeader('Content-Type', 'text/html');
    
    let path = "./views";
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            res.write(data);
            res.end();
        }
    });

} )

server.listen(3000, 'localhost', () => {
    console.log("Listening to port 3000");
})