const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const host = 'localhost';

// Создаем сервер
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Определяем MIME-тип
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    // case '.ico':
    //   contentType = 'image/x-icon';
    //   break;
  }

  // Читаем и отправляем файл
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Страница не найдена</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Ошибка сервера: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Запускаем сервер
server.listen(port, host, () => {
  console.log(`Сервер запущен по адресу: http://${host}:${port}`);
});
