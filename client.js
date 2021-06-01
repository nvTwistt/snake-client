const net = require("net");
const {IP, PORT} = require('./constants');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected");
    conn.write("Name: MLT");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 3000);
  });
  // conn.on('connect', () => {
    
  // });
  // conn.on("Name", () => {
  //   console.log("An event occured");
  // })
  return conn;
};


module.exports = connect;