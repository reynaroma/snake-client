// client setup
const net = require('net');
const { IP, PORT, name} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP ADDRESS HERE
    port: PORT // PORT number here
  });
  // print the message to the screen when the connection is successfully est
  conn.on('connect', () => {
    console.log("Successfully connected to a game server.");
    // print/send string to the server
    conn.write(`Name: ${name}`);
  });

  // to handle incoming data from the server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  // Handle the close event to gracefully exit the program
  conn.on("close", () => {
    console.log('Connection closed!');
    process.exit();
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };