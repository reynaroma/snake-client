// client setup
const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP ADDRESS HERE
    port: 50541 // PORT number here
  });

  // to handle incoming data from the server
  conn.on("data", (data) => {
    console.log("server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;