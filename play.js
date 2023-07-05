// client setup
const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const conn = connect();

// call setupInput()
setupInput(conn);