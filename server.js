const http = require('http');

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'database';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'success',
    message: 'Backend connected successfully!',
    database_host: DB_HOST
  }));
});

server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});