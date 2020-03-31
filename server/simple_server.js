const http =require('http');

//creating server

http.createServer((function(req,res){
    res.write("heyy!!");
    res.end();
})).listen(5000,()=>console.log("server running"));
