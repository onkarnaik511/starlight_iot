// Include the mqtt module
var mqtt = require('mqtt');

// Create client object and use it to establish a connection with the broker
var client = mqtt.connect("mqtt://test.mosquitto.org:1883",{clientId:"mq01"})

// Callback function "ON CONNECT". Called automatically when connection is successful.
client.on("connect", function() {
    console.log("Client Connected");

    // Once connection is done, use the client object to publish data. Topic: "test" and Message: "Hello World"
    client.publish("starlight", "Hello World");
    console.log("Message Published");

    // close client object and the connection
    client.end();
})

// Callback function "ON ERROR". Called automatically if the connection attemt results in an error.
client.on("error", function(error) {
    console.log("Connect Error: " + error);
})
