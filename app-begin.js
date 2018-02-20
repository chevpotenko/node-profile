let http = require('http');
let fs = require('fs');

let myObj = {
    name: "Mary",
    age: "19",
    job: "developer"
}

let server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);

    if(req.url === '/index' || req.url === '/'){
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream( __dirname + '/index.html', 'utf8').pipe(res);        
    } else if(req.url === '/contact'){
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream( __dirname + '/contact.html', 'utf8').pipe(res); 
    } else if(req.url === '/api/news'){
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(myObj));        
     }else {

        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream( __dirname + '/404.html', 'utf8').pipe(res); 
    }
});

server.listen(3000, '127.0.0.1');
console.log('server listen on port :3000');