const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  res.write("hello");
  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("Server running" + port);
  }
});
