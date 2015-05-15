var socket = require( 'socket.io' );
var io = socket.listen(6063);

io.sockets.on('connection', function(socket) {
	socket.on('evento', function( data ){
		console.log(data.nombre);
	});
});