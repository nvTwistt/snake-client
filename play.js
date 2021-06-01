const connect = require("./client");
let connectObject = connect();
const setupInput = require('./input');
console.log("Connecting ...");

setupInput(connectObject);
