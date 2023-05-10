const net = require("net");
const connect = function () {
  const conn = net.createConnection({host: '165.227.47.243', port: 50541});

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


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

// setInterval(function, delay, param1, param2, ...)