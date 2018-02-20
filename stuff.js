let events = require('events');
let util = require('util');
let fs = require('fs');

let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg) {
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was enitted');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

let people = [james, mary, ryu];

people.forEach(function(person) {
    person.on('speak', function(mssg) {
        console.log(person.name + ' said: ' + mssg);
    })
});

james.emit('speak', "Hello I'm " + james.name);
mary.emit('speak', "Hello I'm " + mary.name);

// fs.mkdir('stuff', function (){
//     let fileLog = fs.readFile('log.txt', 'utf8', function(data) {
//         fs.writeFile('./stuff/new_log.txt', data);        
//     });
// });

fs.unlink('./stuff/new_log.txt', function() {
    fs.rmdir('stuff');
});

console.log('ASYNC');