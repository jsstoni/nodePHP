var socket = require( 'socket.io' );
var http = require('http');
var server = http.createServer(function (req, res) {
	console.log('ServerStart');
});

var io = socket.listen(server);

io.sockets.on('connection', function(socket) {
	socket.on('evento', function( data ){
		console.log(data.nombre);
	});
});

server.listen(6063);