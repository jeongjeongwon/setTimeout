const http = require('http'); // Node.js 기본 내장 모듈

    const hostname = 'localhost'; // = localhost
    const port = 4000; // 접근 포트

    const server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'text/plain'); // 아래 출력 내용 형태
      res.end('hi'); // Hello World 출력
    });

    server.listen(port, () => { // 이제 서버는 127.0.0.1 호스트의 3000 포트로 들어오는 요청을 기다린다.
      console.log(`Server running at http://${hostname}:${port}/`); // 해당 이벤트(listen) 발생시 터미널에 출력
    });

    