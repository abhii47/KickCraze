const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    if(req === '/')
    {
        res.setHeader("content-type","text/html");
        fs.readFile('./Frontend/src/App.jsx',(err, data)=>{
            if(err){
                res.write(`<p>error</p>`);
                res.end();
            }else{
                res.write(data);
                res.end();
            }
        });
    } 
});

const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});