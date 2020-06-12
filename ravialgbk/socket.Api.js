var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', function(socket){
    console.log('A user connected');
});

socketApi.sendNotification = function() {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

socketApi.sendTabOne = function(data){
    io.sockets.emit('tapOne', data)
}

socketApi.sendTabTwo = function(data){
    io.sockets.emit('tapTwo', data)
}

socketApi.sendTabThree = function(data){
    io.sockets.emit('tapThree', data)
}

socketApi.sendTabFour = function(data){
    io.sockets.emit('tapFour', data)
}

socketApi.sendTabFive = function(data){
    io.sockets.emit('tapFive', data)
}

module.exports = socketApi;