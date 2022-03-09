const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
    console.log('first callback - ', args);
}

emitter.on('leo',callback1);

emitter.on('leo', (args) => {
    console.log('first callback -', args);
})

emitter.on('leo', (args) => {
    console.log('second callback -', args);
})

emitter.emit('leo', { message: 1});
emitter.emit('leo', { message: 2});
emitter.removeListener('leo', callback1);
emitter.emit('leo', { message: 3});