LifeCycle API ?
    - 컴포넌트가 브라우저에 나타날때, 사라질때, 업데이트 될때 호출되는 api
    

1. 컴포넌트 초기 생성
    - 컴포넌트가 브라우저에 나타나기 전, 후에 호축되는 api들이 있다.
    
constructor
- 컴포넌트 생성자 함수. 컴포넌트가 새로 만들어질때마다 이 함수가 호출된다.
````javascript
constructor(props) {
    super(props);
}
````

componentWillMount
- 컴포넌트가 화면에 나가기 직전에 호출되는 api. 잘사용하지 X
v16.3 이후부터는 UNSAFE_componentWillMount() 라는 이름으로 사용됨
````javascript
componentWillMount() {
    
}
````

componentDidMount
- 컴포넌트가 화면에 나탄게 됐을때 호출되는 api
DOM을 사용해야하는 외부 라이브러리를 연동하거나, 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해
axios, fetch 등을 통하여 ajax 요청하거나 DOM의 속성을 읽거나 직접 변경하는 작업을 진행
````javascript
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
````


2. 컴포넌트 업데이트
- 컴포넌트 업데이트는 props의 변화, 그리고 state의 변화에 따라 결정.

componentWillReceiveProps
- 이 api는 컴포넌트가 새로운 props를 받게 되었을때 호출된다.
이 안에서 주로 state, props에 따라 변해야 하는 로직을 작성.
새로 받게될 props는 nextProps로 조회할 수 있으며,
이때 this.props를 조회하면 업데이트 되기전에 api 이다.
v16.3부터는  UNSAFE_componentWillReceiveProps() 라는 이름으로 사용, 이 기능은 상황에 따라 새로운 api getDerivedStateFromProps 로 대체 될 수도 있다.
````javascript
componentWillReceiveProps(nextProps) {
  // this.props 는 아직 바뀌지 않은 상태
}
````

static getDerivedStateFromProps()
- props로 받아온 값을 state로 동기화 하는 작업
````javascript
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
  // 사용됩니다.
  /*
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  */
}
````
shouldComponentUpdate
- 컴포넌트를 최적화하는 작업에서 매우 유용
리액트에서는 변화가 발생하는 부분만 업데이트를 해줘서 성능이 잘나온다. 변화가 발생한 부분만 감지해 내기 위해서는
virtual DOM에 한번 그려줘야한다.
즉, 현재 컴포넌트의 상태가 업데이트 되지 않아도, 부모 컴포넌트가 리렌더링되면, 자식 컴포넌트들도 렝더링 된다.
(여기서, 렌더링 된다는 건 render() 함수가 호출된다는 의미)
변화가 없으면 DOM 조작은 하지 않게 된다. 그저 virutal DOM에만 렌더링 할뿐
(부하가 많은 작업은 아니지만, 컴포넌트가 많아지면 cpu자원을 어느정도 사용함)
쓸대없이 낭비되고 있는 cpu처리량을 줄여주기 위해 virtual DOM에 리렌더링 하는것도, 불필요할경우엔 
shouldComponentUpdate를 작성한다.
이 함수는 기본적으로 true를 반환, 따로 작성을 해주어서 조건에 딸 false를 반환하면, 해당 조건에는 render 함수를 호출하지 않는다.

````javascript
shouldComponentUpdate(nextProps, nextState) {
  // return false 하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;
}
````

componentWillUpdate
- 이 api는 shouldComponentUpdate 에서 true를 반환했을때 호출.
false를 반환했다면 이 함수는 호출되지 않는다.
여기서 주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업을 한다.
이 함수가 호출된 다음엔 render()가 호출된다.(v16.3이후)
기존 기능은 getSnapshotBeforeUpdate 로 대체 될 수 있다.

````javascript
componentWillUpdate(nextProps, nextState) {

}
````


3. 컴포넌트 제거

componentWillUnmount
- 등록했던 이벤트 제거, 만약 setTimeout 걸은것이 있다면, clear Timeout을 통하하여 제거
외부 라이브러리를 사용한게있고, 해당 라이브러리에 dispose 기능이 있다면 여기서 호출
````javascript
componentWillUnmount() {
  // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
}
````

사용해보기
- 콘솔메세지를 확인해보면 5배수일때 컴포넌트가 리렌딩 되지 않는다.
Counter.js
````javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
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


4. 컴포넌트 에러 발생
- render 함수에서 에러가 발생한다면, 리액트 앱이 크래쉬 되어버린다.
이러한 상황에 유용하게 사용할 수 있는 api

componentDidCatch
````javascript
componentDidCatch {
    this.setState({
        error: true
    });
}
````
- 에러가 발생되면 conponentDidCatch 가실행. state.error를 true로 설정하고, render함수쪽에서 에러를 띄워줌
- 컴포넌트 자신의 render 함수에서 에러가 발생해버리는것은 잡아낼 수 없지만,
컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있다.

````javascript
import React, { Component } from 'react';

const Problematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>
      
    </div>
  );
};

class Counter extends Component {
  // ... 생략
  
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Problematic /> }
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
````
Error뜨는 부분에서 X 를 누르면 아무것도 뜨지 않음.
problematic 렌더링이 될 때 에러가 발생했음을 알리는 throw를 사용

componentDidCatch를 통하여 에러잡기
````javascript
import React, { Component } from 'react';

const Promblematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>
      
    </div>
  );
};

class Counter extends Component {
  state = {
    number: 0,
    error: false
  }

  // (...)
  
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }
  
  render() {
    if (this.state.error) return (<h1>에러발생!</h1>);

    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Promblematic /> }
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
````


