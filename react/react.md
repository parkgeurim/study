# react


react ���̺귯��?
- DOM ������ ���°� ������Ʈ ������ �ּ�ȭ�ϰ�, ���� ��� ����, ����� �������̽��� �����ϴ� �Ϳ� ������ ���ֵ���
�ϱ����� ���̺귯��, �����ӿ�ũ�� �������.

virtual DOM ?
- virtual DOM�� ������ DOM. ��ȭ�� �Ͼ�� ������ �������� DOM�� ���ο� �� �ִ°��� �ƴ϶�
�ڹٽ�ũ��Ʈ�� �̷��� ���� DOM�� �ѹ� ���������ϰ�, ������ DOM�� �񱳸� �ϳ� ���� ���� ��ȭ�� �ʿ��� ������ ������Ʈ������
- virtal DOM�� ��������ν� �����Ͱ� �ٲ������ �� �̻� ��� ������Ʈ���� ����Ѵ°� �ƴ϶�,
�׳� �ϴ� �ٲ� ������Ʈ�� �׷����� �񱳸� �Ѵ���, �ٲ� �κи� ã�Ƽ� �ٲ���
( ���� ������ : https://www.youtube.com/watch?v=muc2ZF0QIO4)



1. create-react-app���� ������Ʈ ����
 1) yarn��ġ  
  - & yarn global add create-react-app
      (�Ǵ� npm install -g create-react-app)

 2) ������Ʈ ����
  - & create-react-app hello-react

 3) ������Ʈ ���� ���� ����
  - ����Ʈ ������Ʈ�� ����� yarn start ��ɾ�� ������Ʈ ���� ������ ������ �� �ִ�.
  - ���� ������ ��Ʈ 3000
  - & cd hello-react
  - npm start
  - http://localhost:3000/

  

 2. hello-react ������Ʈ ����

  - App.js :
    class App extends Component {
               ...
             }
             
   = > Ŭ���� ���·� ������� ������Ʈ�� render �Լ��� �־���Ѵ�. �� ���ο����� jsx�� return���־�� �Ѵ�.

  export default App;
  = > �ۼ��� ������Ʈ�� �ٸ������� �ҷ��� ����� �� �ֵ��� ��������

  - index.js
      ������ �� �츮�� ����Ʈ ������Ʈ�� �����ֱ� ���ؼ��� ReactDOM.render �Լ��� ����մϴ�. 
        ReactDOM.render(<App />, document.getElementById('root')); = > ���Ͽ� �ִ� <div id="root"></div> �� ã�Ƽ� ������
  - http://bit.ly/2FJsJmo
  - 


  3. jsx

```javascript
  import React, { Component } from 'react';
  class App extends Component {
    render() {
      return (
        <div>
        </div>
      );
    }
  }
  export default App;
```

  1) ��Ģ 1 :  �±׸� �� �ݾ��־�� �Ѵ�.
  2) ��Ģ 2 : �ΰ� �̻��� ������Ʈ�� ������ �ϳ��� ������Ʈ�� �������־�� �Ѵ�.
  (div�±� ��ſ� Fragment �� ����Ͽ� ������ ���� �ִ�.)

  ```javascript
    import React, { Component } from 'react';
    
    class App extends Component {
      render() {
        return (
          <div>
            <div>
              Hello
            </div>
            <div>
              Bye
            </div>
          </div>
        );
      }
    }
    
    export default App;
  ```

  3) JSX �ȿ� �ڹٽ�ũ��Ʈ �� ����ϱ� 

  ```javascript
  import React, { Component } from 'react';
  
  class App extends Component {
    render() {
      const name = 'react';
      return (
        <div>
          hello {name}!
        </div>
      );
    }
  }
  
  export default App; 
  
  ```
  
   - const�� ES6�� ���Ե� Ű�����, �ѹ� �����ϰ� �ٲ��� �ʴ� ���� �����Ҷ�
      �ٲ�� �� �� �ִ� ���� let�� ����Ͽ� ���� ���� �ڹٽ�ũ��Ʈ�� var �� ���
      var �� scope�� �Լ�����
      
```javascript
function foo() {
  var a = 'hello';
  if (true) {
    var a = 'bye';
    console.log(a); // bye
  }
  console.log(a); // bye
}

```

  - const�� let�� scope�� ��� ����
  
```javascript
function(foo) {
	let a = 'hello';
	if(true) {
		let a = 'bye';
		console.log(a); //bye
	}
	console.log(a);  //hello
}

```

  4) ���Ǻ� ������
  - jsx���ο��� ���Ǻ� �������� �� �� ���� ���� �����ڸ� ����ϰų�, AND������ ���
    (if�� ����Ҽ�����. ����Ϸ��� IIFE(��� ���� �Լ� ǥ��)�� ����ؾ���)
    
���׿�����
```javascript

import React, {Component} from 'react';

Class App extends Component {
	render() {
		return (
			<div>
			  {
			  	1 + 1 == 2
			  	  ? (<div>�¾ƿ�!</div>)
			  	  : (<div>Ʋ����!</div>)
			  }
			</div>
		)
		
	}
}

export default App;

```
�¾ƿ䰡 ������.
1 + 1 === 3 ���� �ٲٸ�? Ʋ���䰡 ��Ÿ��.

AND ������
(���׿����ڴ� true�϶�, false�϶� �ٸ��͵��� �����ְ� ���� �� ����ϴ¹ݸ�, AND �������� ��� ������ true�϶��� �����ְ�, false ��� �ƹ��͵� �����ְ� ���� ������ ���)
```javascript
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
			  {
			  	1 + 1 === 2 && (<div>�¾ƿ�!</div>)
			  }
			</div>
		);
	}
}

export default App;
```
������ ������ �ۼ��ؾ��Ҷ��� jsx �ۿ��� ������ �ۼ��ϴ°��� ����, ������ �� jsx ���ο���
�ۼ��ؾ��Ѵٸ� IIFE�� ����Ѵ�
```javascript
import React, { Component } from 'React';

Class App extends Component {
    render() {
        const value = 1;
        return (
            <div>
                {
                    (function() {
                        if (value === 1) return (<div>�ϳ�</div>);
                        if (value === 2) return (<div>��</div>);
                        if (value === 3) return (<div>��</div>);
                    }) ()
                }
            </div>
        )
    }
}

```
�� �ڵ�� ������ ���� �� ���� �ִ�. 
    ȭ��ǥ �Լ� :  this, arguments, super ������ ���� �͸� �Լ�.
```javascript
(() => {
    if (value === 1) return (<div>�ϳ�</div>);
    if (value === 2) return (<div>��</div>);
    if (value === 3) return (<div>��</div>);
})()
``` 

  4)  style�� className
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }
}

export default App;
```
css ���Ͽ� �ִ� ��Ÿ���� ������ �ö�

```css
.App {
  background: black;
  color: aqua;
  font-size: 36px;
  padding: 1rem;
  font-weight: 600;
}
```
```javascript
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        ����Ʈ
      </div>
    );
  }
}

export default App;
```

5) �ּ�
    - {/*  */} or // (�±׻��̿� ����Ҷ�)
```javascript
    import React, { Component } from 'react';
    
    class App extends Component {
      render() {
        return (
          <div>
            {/* �ּ��� �̷��� */}
            <h1
              // �±� ���̿�
            >����Ʈ</h1>
          </div>
        );
      }
    }
    
    export default App;
```





