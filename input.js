const { 
  move_up_key, move_down_key,
  move_right_key, move_left_key,
  say_hello, say_como_estas
} = require('./constants')
// stores the active TCP connection object
let connection;

const setupInput = (conn) => {
  // start listening for user input via keyboard
  connection = conn;
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
  } else if (data === move_up_key) {
    connection.write('Move: up');
  } else if (data === move_left_key) {
    connection.write('Move: left');
  } else if (data === move_down_key) {
    connection.write('Move: down');
  } else if (data === move_right_key) {
    connection.write('Move: right');
  } else if (data === say_hello) {
    connection.write('Say: Hello there')
  } else if (data === say_como_estas) {
    connection.write('Say: Como estas')
  } else {
    console.log("Received input:", data);
  }
};

module.exports = { setupInput };