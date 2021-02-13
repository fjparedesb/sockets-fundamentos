var socket = io();

socket.on('connect', function() {
    console.log('conectado');
});

socket.on('disconnect', function() {
    console.log('desconectado');
});

//enviar mensaje
socket.emit('enviarMensaje', {
    usuario: 'javier',
    mensaje: 'hola mundo'
}, function() {
    console.log('se disparo el callback');
});

//escuchar mensaje
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});