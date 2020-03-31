const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myemit = new MyEmitter();

myemit.on('event',function(){
    console.log('triggered');
})

myemit.emit('event');
myemit.emit('event');
myemit.emit('event');