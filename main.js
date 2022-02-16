const http = require("http");

const links = `
<a href="/">Anasayfa</a>
<a href="/hakkimda">Hakkımda</a>
<a href="/iletisim">İletişim</a>
`;
const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
      res.write("<h2>Ana Sayfa</h2>" + links);
      break;
    case "/hakkimda":
      res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
      res.write("<h2>Hakkımda Sayfası</h2>" + links);
      break;
    case "/iletisim":
      res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
      res.write("<h2>İletişim Sayfası</h2>" + links);
      break;

    default:
      res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
      res.write("<h2>404 SAYFA BULUNAMADI</h2>" + links);
      break;
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
