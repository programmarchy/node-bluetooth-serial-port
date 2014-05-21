var BluetoothSerialPort = require("./lib/bluetooth-serial-port.js").BluetoothSerialPort;
var serialPort = new BluetoothSerialPort();
serialPort.listPairedDevices(function(devices) {
    console.log('there are', devices.length, 'devices');
    devices.forEach(function(device) {
        console.log(device);
    });
});