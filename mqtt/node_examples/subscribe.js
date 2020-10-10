// Include the mqtt module
var mqtt = require('mqtt');

// Create client object and use it to establish a connection with the broker
var client = mqtt.connect("mqtt://test.mosquitto.org:1883",{clientId:"mq02"})

// Callback function "ON ERROR". Called automatically if the connection attemt results in an error.
client.on("error", function(error) {
    console.log("Connect Error: " + error);
})

// Callback function "ON MESSAGE". Automatically called when any message is received
client.on("message", function(topic, message, packet) {
        // print the data received
    console.log("Message Received");
    console.log("Topic: " + topic);
    console.log("Message: " + message);
})

// Callback function "ON CONNECT". Called automatically when connection is successful.
client.on("connect", function() {
    console.log("Client Connected");
    client.subscribe("starlight", {qos:0});
    console.log("Topic Subscribed");
})

// wait 30 seconds before terminating the program
setTimeout(function(){
    console.log("Closing Connection");

    // close client object and the connection
    client.end();
}, 30000)
