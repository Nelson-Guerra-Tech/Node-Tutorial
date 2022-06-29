// http comes built into node
const http = require('http');

// * Informational responses 100-199
// * Successful responses 200-299
// * Redirection messages 300-399
// * Client error responses 400-499
// * Server error responses 500-599

// get request as parameter one and response for the second parameter
const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // home page
  if (url === '/') {
    // means the connection was successfull
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>home page</h1>');
    // response has end to signify that the server has an end
    // you ALWAYS need res.end = ends the communication
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});

// localhost:3000
server.listen(3000);
