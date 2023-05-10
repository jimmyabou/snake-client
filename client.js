const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({host: IP, port: PORT});

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect',(data) => {
    console.log("from the server,",data);
    console.log("Successfully connected to game server");
    conn.write('Name: JAD');
    
    // setTimeout(()=>conn.write("Move: up"),50);
    // setInterval(()=>conn.write("Move: up"),50);
    //conn.write("Move: up");
  });
 
  
  return conn;
};
module.exports={connect};

