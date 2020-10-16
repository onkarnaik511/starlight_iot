var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
   keyPath: '**********-private.pem.key',
  certPath: '**********-certificate.pem.crt',
    caPath: 'AmazonRootCA1.pem',
  clientId: 'starlight',
      host: '****************.iot.eu-central-1.amazonaws.com'
});

device.on('connect', function() {
    console.log('connect');
    device.subscribe('topic1');
    device.publish('topic2', JSON.stringify({ test_data: 1}));
});

device.on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
});
