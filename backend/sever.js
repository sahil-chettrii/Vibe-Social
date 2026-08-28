const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res)=>{
    res.writeHead(200 ,{'content-Type': "application/json"});
    res.end(JSON.stringify({message : 'server is running'}));
});


server.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
    
});