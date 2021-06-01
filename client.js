const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here
    port: 3000// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("connected");
  });
  conn.on("event name", () => {
    console.log("An event occured");
  })
  return conn;
};


module.exports = connect;