import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = 'localhost';
const port = 8000;

const server = http.createServer((_req, res) => {
  const filePath = path.join(__dirname, 'index.html'); // Assuming your HTML file is named 'index.html' in the same directory

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        // Some other error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error: ' + err.message);
      }
    } else {
      // File found and read successfully
      res.writeHead(200, { 'Content-Type': 'text/html' }); // Set content type to HTML
      res.end(data); // Send the HTML content
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
