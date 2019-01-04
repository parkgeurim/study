# react


react 라이브러리?
- DOM 관리와 상태값 업데이트 관리를 최소화하고, 오직 기능 개발, 사용자 인터페이스를 구현하는 것에 집중할 수있도록
하기위해 라이브러리, 프레임워크가 만들어짐.

virtual DOM ?
- virtual DOM은 가상의 DOM. 변화가 일어나면 실제로 브라우저의 DOM에 새로운 걸 넣는것이 아니라
자바스크립트로 이뤄진 가상 DOM에 한번 랜더링을하고, 기존의 DOM과 비교를 하나 다음 정말 변화가 필요한 곳에만 업데이트를해줌
- virtal DOM을 사용함으로써 데이터가 바뀌었을때 더 이상 어떻게 업데이트할지 고려한는게 아니라,
그냥 일단 바뀐 업데이트로 그려놓고 비교를 한다음, 바뀐 부분만 찾아서 바꿔줌
( 참고 동영상 : https://www.youtube.com/watch?v=muc2ZF0QIO4)



1. create-react-app으로 프로젝트 생성
 1) yarn설치  
  - & yarn global add create-react-app
      (또는 npm install -g create-react-app)

 2) 프로젝트 생성
  - & create-react-app hello-react

 3) 프로젝트 개발 서버 실행
  - 리액트 프로젝트를 만들면 yarn start 명령어로 프로젝트 개발 서버를 실행할 수 있다.
  - 개발 서버는 포트 3000
  - & cd hello-react
  - npm start
  - http://localhost:3000/

  

 2. hello-react 프로젝트 생성

  - App.js :
    class App extends Component {
               ...
             }
             
   = > 클래스 형태로 만들어진 컴포넌트에 render 함수가 있어야한다. 그 내부에서는 jsx를 return해주어야 한다.

  export default App;
  = > 작성한 컴포넌트를 다른곳에서 불러와 사용할 수 있도록 내보내기

  - index.js
      브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render 함수를 사용합니다. 
        ReactDOM.render(<App />, document.getElementById('root')); = > 파일에 있는 <div id="root"></div> 를 찾아서 랜더링
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

  1) 규칙 1 :  태그를 꼭 닫아주어야 한다.
  2) 규칙 2 : 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 한다.
  (div태그 대신에 Fragment 을 사용하여 감싸줄 수도 있다.)

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

  3) JSX 안에 자바스크립트 값 사용하기 

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
  
   - const는 ES6에 도입된 키워드로, 한번 선언하고 바뀌지 않는 값을 설정할때
      바뀌게 될 수 있는 값은 let을 사용하여 선언 기존 자바스크립트의 var 과 비슷
      var 은 scope가 함수단위
      
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

  - const와 let은 scope가 블록 단위
  
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

  4) 조건부 렌더링
  - jsx내부에서 조건부 랜더링을 할 때 보통 삼항 연산자를 사용하거나, AND연산자 사용
    (if문 사용할수없다. 사용하려면 IIFE(즉시 실행 함수 표현)을 사용해야함)
    
삼항연산자
```javascript

import React, {Component} from 'react';

Class App extends Component {
	render() {
		return (
			<div>
			  {
			  	1 + 1 == 2
			  	  ? (<div>맞아요!</div>)
			  	  : (<div>틀려요!</div>)
			  }
			</div>
		)
		
	}
}

export default App;

```
맞아요가 보여짐.
1 + 1 === 3 으로 바꾸면? 틀려요가 나타남.

AND 연산자
(삼항연산자는 true일때, false일때 다른것들을 보여주고 싶을 때 사용하는반면, AND 연산자의 경우 조건이 true일때만 보여주고, false 경우 아무것도 보여주고 싶지 않을때 사용)
```javascript
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
			  {
			  	1 + 1 === 2 && (<div>맞아요!</div>)
			  }
			</div>
		);
	}
}

export default App;
```
복잡한 조건을 작성해야할때는 jsx 밖에서 로직을 작성하는것이 좋다, 하지만 꼭 jsx 내부에서
작성해야한다면 IIFE를 사용한다
```javascript
import React, { Component } from 'React';

Class App extends Component {
    render() {
        const value = 1;
        return (
            <div>
                {
                    (function() {
                        if (value === 1) return (<div>하나</div>);
                        if (value === 2) return (<div>둘</div>);
                        if (value === 3) return (<div>셋</div>);
                    }) ()
                }
            </div>
        )
    }
}

```
위 코드는 다음과 같이 쓸 수도 있다. 
    화살표 함수 :  this, arguments, super 개념이 없는 익명 함수.
```javascript
(() => {
    if (value === 1) return (<div>하나</div>);
    if (value === 2) return (<div>둘</div>);
    if (value === 3) return (<div>셋</div>);
})()
``` 

  4)  style과 className
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
css 파일에 있는 스타일을 가지고 올때

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
        리액트
      </div>
    );
  }
}

export default App;
```

5) 주석
    - {/*  */} or // (태그사이에 사용할때)
```javascript
    import React, { Component } from 'react';
    
    class App extends Component {
      render() {
        return (
          <div>
            {/* 주석은 이렇게 */}
            <h1
              // 태그 사이에
            >리액트</h1>
          </div>
        );
      }
    }
    
    export default App;
```






*props  와 state ?
            - props와 state는 react의 컴포넌트 객체에서 DOM 객체를 제어할때 꼭필요한 개념중하나
            - props : properties 의 줄임말, props는 React에서 사용자가 컴포넌트에 전달해서 보관하길 원하는 데이터
            즉, 컴포넌트 내에서 데이터가 보관되면, 이 데이터는 수정되지 않고 보존되어야 하는 법칙이 성립된다.
            만약, props의 값을 변경하고자 할때에는 컴포넌트 내부가 아닌, 부모 컴포넌트에서 이에 대한 부분이 변경되어야한다. 
            예)
```javascript
    var post = {title : '테스트 타이틀'}
    <Postdiv post = {post} />
```
부모객체에서 자식객체에 props를 넘겨주는 예시,
부모객체에서 자식객체에 post라는 데이터를 props 형태로 전달해줄 수 있다.
이는 부모객체에서 넘겨주는 데이터이기때문에 실제 사용하는 컴포넌트 내에서 props의 변경은 원칙적으로 금지되어있다.
                
 - state ? 
 - props와의 차이점이라면, state는 컴포넌트 내부에 존재하기 때문에 상태값 변경이 가능.
 ```javascript
 var post = React.createClass ({
    get InitialState : function () {
        return {
            title : '테스트타이틀'
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
state에 관련된 간략한 예시입니다. 우리는 post라는 컴포넌트에서 getInitialState를 통해서 컴포넌트 내에서 쓰일 state값을 리턴받는다.
getInitialState는 return을 통해 state 초기값을 반환해 주게 되는데, 
이렇게 함으로써 컴포넌트 내부에서는 this.state를 통해 상태값을 제어할 수 있다.

render 함수에서는 바로 getInitialState에서 받은 state값 중, title을 출력하고 있음을 알 수 있다. 
이렇게 초기화된 state값을 출력할 수 있지만, 중간에 state값을 바꿔줄 수도 있다.
````javascript
var post = React.createClass({
    getInitialState : function () {
        return {
            title : '테스트타이틀'
        }
    },
 
    handleChange: function () {
        this.setState({title:'테스트타이틀1'});
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
        

4. 새 컴포넌트 만들기
    1) src 디렉토리에 MyName 컴포넌트 만들기
        - 자신이 받아온 props값은 this. 키워드를 통하여 조회할 수 있다.
        - name 이라는 props를 보여주도록 설정
        
MyName.js
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
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
      <MyName name="리액트" />
    );
  }
}

export default App;
```
import를 통하여 컴포넌트를 불러오고, 랜더링
이렇게 컴포넌트를 만들고나면, 일반 태그를 작성하듯이 작성.
props 값은 name="리액트" 이런식으로 태그의 속성을 설정해주는 것처럼 해준다.

5. defaultProps
    - props를 빠뜨렸을때, 특정상황에 props를 비워야할때 props의 기본값을 설정 - > defaultProps

MyName.js
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;

```
이렇게 하면 만약에 <MyName /> 이런식으로 name 값을 생략해버리면 “기본이름” 이 나타난다. 
참고로, defaultProps 는 다음과 같은 형태로도 설정 할 수 있다.

````javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

MyName.defaultProps = {
  name: '기본이름'
};

export default MyName;
````

6. 함수형 컴포넌트
-함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은, state 와 LifeCycle 이 빠져있다는 점이다. 그래서, 
컴포넌트 초기 마운트가 아주 미세하게 빠르고, 메모리 자원을 덜 사용. 
미세한 차이이니, 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없다
````javascript
import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;
````

7. state
- 동적인 데이터를 다룰때
- Counter 파일 생성
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
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
````

