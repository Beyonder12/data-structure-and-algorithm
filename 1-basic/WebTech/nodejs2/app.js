
// STAGE 1
// var fs = require('fs');

// fs.writeFile('./hello.txt', 'how are you?', function(err) {
//   if(!err) {
//     fs.readFile('./hello.txt', function(err, data) {
//       if(!err) {
//         console.log(data.toString())
//       }
//     })
//   }
// })

//STAGE 2
// var http = require('http');
// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var server = http.createServer(function(req, res) {
//   eventEmitter.emit('Someone requested', 'TEST'); //Event Trigger
//   res.end('Server works!!!');
// });

// eventEmitter.on('Someone requested', function(data) {
//   console.log('A requested has been done on the server', data);
// }); //Event Listener

// server.listen(3000, 'localhost', function() {
//   console.log(`Server started at port : 3000`);
// });


var express = require('express');
var http = require('http');
var fs = require('fs')

var app = express();
var server = http.createServer(app);


app.get('/', function(req, res) {
  res.send('<h1>Express Works!</h1>');
})

app.get('/tasks', function(req, res) {
  fs.readFile('./db.json', function(err, data) {
    var tasks = JSON.parse(data.toString()).tasks;
    res.json(tasks)
  })
})

server.listen(3000, function() {
  console.log('Server Listening at port 3000');
});
