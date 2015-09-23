var sticky = require('sticky-session');
var express = require('express')();
var http = require('http').Server(express);


var port = 3000;

if(sticky.listen(http, port)){
    // Worker code
    var App = require('./app').App;
    var app = new App(express, http);


    http.once('listening', function() {
        console.log('server started on 3000 port');
    });
} else {
    // Master code
}
