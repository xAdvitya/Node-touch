const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{

//     if(req.url == '/'){
//         fs.readFile(path.join(__dirname,'../public','index.html'),(err,content)=>{
//             console.log(err);
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.end(content);
//         })
//     };


// if(req.url == '/contact'){
//     fs.readFile(path.join(__dirname,'../public','contact.html'),(err,content)=>{
//         console.log(err);
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(content);
//     })
// }

// if(req.url == '/api/users'){
//     const users = [
//         {name:'Advitya',Age:'19'},
//         {name:'Rahul',Age:'20'}
//     ];
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(users));
// }


let filepath = path.join(__dirname,'../public', req.url == '/'?'index.html':req.url);

//checking the extension

let ext = path.extname(filepath);

//setting content type 

let contenttype = 'text/html';

fs.readFile(filepath,(err,content)=>{   
    if(err){
        if(err == 'ENDENT'){
            fs.readFile(path.join(__dirname,'../public','error.html'),(err,content)=>{
                res.writeHead(200,{'Content-Type':contenttype});
                res.end(content,'utf8');
            })
        }
        else{
            res.writeHead(500);
            res.end(`server error ${err.code}`);
        }
    }
    else{
        res.writeHead(200,{'Content-Type':contenttype});
        res.end(content,'utf8');
    }
})


});


const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`server running at port ${PORT}`));