const http = require('http') //http 모듈을 읽어들임
//웹서버를 실행
const svr = http.createServer(handler) // 서버를 생성
svr.listen(8081) //8081포트를 사용하여 서버에 접근

// 서버에 접근이 있을 때의 핸들러 함수 실행
function handler (req, res) {
	console.log('url:', req.url)
	console.log('method:', req.method)
	// http 헤더를 출력
	// 응답 본문을 출력
	res.writeHead(200, {'Content-Type':'text/html'})
	res.end('<h1>Hello, World!</h1>\n')
}

