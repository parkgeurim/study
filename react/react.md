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






*props  �� state ?
            - props�� state�� react�� ������Ʈ ��ü���� DOM ��ü�� �����Ҷ� ���ʿ��� �������ϳ�
            - props : properties �� ���Ӹ�, props�� React���� ����ڰ� ������Ʈ�� �����ؼ� �����ϱ� ���ϴ� ������
            ��, ������Ʈ ������ �����Ͱ� �����Ǹ�, �� �����ʹ� �������� �ʰ� �����Ǿ�� �ϴ� ��Ģ�� �����ȴ�.
            ����, props�� ���� �����ϰ��� �Ҷ����� ������Ʈ ���ΰ� �ƴ�, �θ� ������Ʈ���� �̿� ���� �κ��� ����Ǿ���Ѵ�. 
            ��)
```javascript
    var post = {title : '�׽�Ʈ Ÿ��Ʋ'}
    <Postdiv post = {post} />
```
�θ�ü���� �ڽİ�ü�� props�� �Ѱ��ִ� ����,
�θ�ü���� �ڽİ�ü�� post��� �����͸� props ���·� �������� �� �ִ�.
�̴� �θ�ü���� �Ѱ��ִ� �������̱⶧���� ���� ����ϴ� ������Ʈ ������ props�� ������ ��Ģ������ �����Ǿ��ִ�.
                
 - state ? 
 - props���� �������̶��, state�� ������Ʈ ���ο� �����ϱ� ������ ���°� ������ ����.
 ```javascript
 var post = React.createClass ({
    get InitialState : function () {
        return {
            title : '�׽�ƮŸ��Ʋ'
        }
    },
    render : function () {
        return (
            <div>
                <p>{this.state.title}</p>
            </div>
        )
    }
 });
 ```
state�� ���õ� ������ �����Դϴ�. �츮�� post��� ������Ʈ���� getInitialState�� ���ؼ� ������Ʈ ������ ���� state���� ���Ϲ޴´�.
getInitialState�� return�� ���� state �ʱⰪ�� ��ȯ�� �ְ� �Ǵµ�, 
�̷��� �����ν� ������Ʈ ���ο����� this.state�� ���� ���°��� ������ �� �ִ�.

render �Լ������� �ٷ� getInitialState���� ���� state�� ��, title�� ����ϰ� ������ �� �� �ִ�. 
�̷��� �ʱ�ȭ�� state���� ����� �� ������, �߰��� state���� �ٲ��� ���� �ִ�.
````javascript
var post = React.createClass({
    getInitialState : function () {
        return {
            title : '�׽�ƮŸ��Ʋ'
        }
    },
 
    handleChange: function () {
        this.setState({title:'�׽�ƮŸ��Ʋ1'});
    },
 
    render : function () {
        return (
            <div>
                <p>{ this.state.title }</p>
                <input type="text" onChange={ this.handleChange } />
            </div>
        )
    }
});
````
        

4. �� ������Ʈ �����
    1) src ���丮�� MyName ������Ʈ �����
        - �ڽ��� �޾ƿ� props���� this. Ű���带 ���Ͽ� ��ȸ�� �� �ִ�.
        - name �̶�� props�� �����ֵ��� ����
        
MyName.js
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        �ȳ��ϼ���! �� �̸��� <b>{this.props.name}</b> �Դϴ�.
      </div>
    );
  }
}

export default MyName; 
```

App.js
```javascript
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="����Ʈ" />
    );
  }
}

export default App;
```
import�� ���Ͽ� ������Ʈ�� �ҷ�����, ������
�̷��� ������Ʈ�� �������, �Ϲ� �±׸� �ۼ��ϵ��� �ۼ�.
props ���� name="����Ʈ" �̷������� �±��� �Ӽ��� �������ִ� ��ó�� ���ش�.

5. defaultProps
    - props�� ���߷�����, Ư����Ȳ�� props�� ������Ҷ� props�� �⺻���� ���� - > defaultProps

MyName.js
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '�⺻�̸�'
  }
  render() {
    return (
      <div>
        �ȳ��ϼ���! �� �̸��� <b>{this.props.name}</b> �Դϴ�.
      </div>
    );
  }
}

export default MyName;

```
�̷��� �ϸ� ���࿡ <MyName /> �̷������� name ���� �����ع����� ���⺻�̸��� �� ��Ÿ����. 
�����, defaultProps �� ������ ���� ���·ε� ���� �� �� �ִ�.

````javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        �ȳ��ϼ���! �� �̸��� <b>{this.props.name}</b> �Դϴ�.
      </div>
    );
  }
}

MyName.defaultProps = {
  name: '�⺻�̸�'
};

export default MyName;
````

6. �Լ��� ������Ʈ
-�Լ��� ������Ʈ�� Ŭ������ ������Ʈ�� �ֿ� ��������, state �� LifeCycle �� �����ִٴ� ���̴�. �׷���, 
������Ʈ �ʱ� ����Ʈ�� ���� �̼��ϰ� ������, �޸� �ڿ��� �� ���. 
�̼��� �����̴�, ������Ʈ�� ������ ���� ������ �ϰ� �Ǵ°� �ƴ϶�� ���������� ū ���̴� ����
````javascript
import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      �ȳ��ϼ���! �� �̸��� {name} �Դϴ�.
    </div>
  );
};

export default MyName;
````

7. state
- ������ �����͸� �ٷ궧
- Counter ���� ����
Counter.js
````javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>ī����</h1>
        <div>��: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
````

