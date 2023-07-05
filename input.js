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
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === 'f') {
    connection.write('Say: Hello there')
  } else if (data === 'r') {
    connection.write('Say: Como estas')
  } else {
    console.log("Received input:", data);
  }
};

module.exports = { setupInput };