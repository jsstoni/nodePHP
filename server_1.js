var io = require("socket.io")();

io.on('connection', function(socket) {
	socket.on('evento', function( data ){
		console.log(data.nombre);
	});
});

io.listen(6063);