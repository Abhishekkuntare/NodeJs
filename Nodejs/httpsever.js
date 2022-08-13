const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1>This is a node js learning </h1><p>this is a universe and i am the abhishek pravin kuntare</p>"
  );
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

server.js(port(sbhsie));
