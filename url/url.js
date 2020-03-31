const url = require('url');

const myurl = new URL('https://xuniversalx.herokuapp.com/');

//searilized url

console.log(myurl.href);
console.log(myurl.toString);

//host name

console.log(myurl.host);
console.log(myurl.hostname);

//pathname

console.log(myurl.pathname);

