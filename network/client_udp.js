const dgram = require("dgram");

const client = dgram.createSocket("udp4");

let message = process.argv[2] || "no message received";

message = Buffer.from(message);

client.send(message, 0, message.length, 41234, "localhost");
