// client setup
const net = require('net');
const connect = require('./client')

console.log("Connecting ...");
const conn = connect();

const setupInput = function() {
  // start listening for user input via keyboard
  const stdin = process.stdin; 
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    console.log('Connection closed!');
    process.exit();
  } else {
    console.log("Received input:", data);
  }
};
// call setupInput()
setupInput();

// Handle the close event to gracefully exit the program
conn.on("close", () => {
  console.log('Connection closed!');
  process.exit();
});