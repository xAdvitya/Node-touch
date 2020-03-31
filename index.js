//modeule wrapper function
// function(exports,require,module,__filename,__dirname)

console.log(__dirname,__filename);

const Person  = require('./Person');

person1 = new Person('Advitya',20);

person1.greeting();


const Logger = require('./events/logger');

const logger = new Logger();

logger.on('message',function(data){
    console.log('called listner',data)
});

logger.log('hello');