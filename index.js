const socketio = require('socket.io-client');
const gpio = require('rpi-gpio');

const socket = socketio('http://45.55.30.54:41583', {
  reconnect: true,
});

gpio.setup(7, gpio.DIR_OUT);

socket.on('connect', () => {
  console.log('connected');
});

socket.on('status', (data) => {
  if (data === 'on') {
    gpio.write(7, 1);
  } else {
    gpio.write(7, 0);
  }
});

