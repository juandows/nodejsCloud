//var app = require('express');
//var http = require('http').Server(app);
var sio = require('socket.io');
var io;

function App(express, http){
    express.get('/', function(req, res){

        //send the index.html file for all requests
        res.sendFile(__dirname + '/index.html');

    });
    io = sio(http);
}

exports.App = App;

//for testing, we're just going to send data to the client every second
setInterval( function() {

    /*
     our message we want to send to the client: in this case it's just a random
     number that we generate on the server
     */
    var msg = Math.random();
    io.emit('message', process.pid+' '+msg);
    console.log (process.pid+' '+msg);

}, 1000);
