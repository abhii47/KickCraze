const http = require('http');

const server = http.createServer((req, res) =>{
   console.log("request occur successsfully"); 
});

const port = 5173;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});