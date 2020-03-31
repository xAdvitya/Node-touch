const fs = require('fs');
const path = require('path');

//create folder

fs.mkdir(path.join(__dirname,'/makefolder'),{},function(){
    console.log('process complete');
});

//wrirting
fs.writeFile(path.join(__dirname,'/makefolder','hello.txt'),"Heyyy !!",function(){
    console.log('process complete');
});

//readfile

fs.readFile(path.join(__dirname,'/makefolder','hello.txt'),'utf8',function(err,data){
    console.log(data);
});

//rename file

fs.rename(path.join(__dirname,'/makefolder','hello.txt'),path.join(__dirname,'/makefolder','text.txt'),function(){
    console.log('process complete');
});