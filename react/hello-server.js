const http = require('http') //http ����� �о����
//�������� ����
const svr = http.createServer(handler) // ������ ����
svr.listen(8081) //8081��Ʈ�� ����Ͽ� ������ ����

// ������ ������ ���� ���� �ڵ鷯 �Լ� ����
function handler (req, res) {
	console.log('url:', req.url)
	console.log('method:', req.method)
	// http ����� ���
	// ���� ������ ���
	res.writeHead(200, {'Content-Type':'text/html'})
	res.end('<h1>Hello, World!</h1>\n')
}

