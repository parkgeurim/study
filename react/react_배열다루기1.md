리액트에서 state내부의 값을 직접적으로 수정 하면 안됨.
이를 불변성유지라고함

push, splice, unshift,pop 같은  내장함수는 배열자체를 직접 수정하게 됨으로 적합하지 않음.
그대신 기존의 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter 같은 함수를 사용

리액트에서 불변성 유지가 중요한 이유는 불변성을 유지해야, 리액트에서 모든것들이 필요한 상황에 리렌더링 되도록
설계해줄 수 있고, 그렇게 해야 나중에 성능에도 최적화됨.

배열을 렌더링하게 될 때에는 꼭 고유값을 key로 사용!

1. 데이터 추가
- App 컴포넌트에 information이라는 배열을 만들고, 그 안에 배열의 기본값들인 샘플 데이터 두개를 추가
````javascript
{
  id: 0,
  name: '이름',
  phone: '010-0000-0000'
}
````

여기서 id 값은 각 데이터를 식별하기 위함.
이 값은 데이터를 추가할때마다 숫자를 1씩 더해줌
````javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
````


2. 데이터 렌더링
- 자바스크립트 내장함수 map 을 이용하여 렌더링

  1) map 함수 알아보기
````javascript
const a = [1,2,3,4,5];
````
이 배열을 가지고 원소들에 2씩 곱한다고 가정.
forEeach를 사용했을때
````javascript
const a = [1,2,3,4,5];
const b = [];

b.forEach(number => b.push(number * 2));
````
map을 사용했을때
````javascript
const a = [1,2,3,4,5];
const b = a.map(number = > number * 2);

````

  2) 컴포넌트 만들기
  - PhoneInfo : 각 전화번호 정보를 보여주는 컴포넌트
  - PhoneInfoList : 여러개의 PhoneInfo 컴포넌트
  
PhoneInfo.js
````javascript
// file: src/components/PhoneInfo.js
import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, phone, id
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
````
info라는 객체를 props로 받아와서 렌더링.
info값을 전달해주는 것을 까먹게된다면 컴포넌트가 크래쉬됨 . info가 undefined일때에는 비구조화 할당을 통해
내부의 값을 받아올 수 없기 때문.
그렇기 때문에 defualtProps를 통하여 info의 기본값을 설정

PhoneInfoList.js
````javascript
// src/components/PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;
````
data라는 배열을 가지고 와서 map을 통하여 jsx로 변환. 그 과정에서 key라는 값도 설정
key는 리액트에서 배열을 렌더링할때 필요한 값
리액트는 배열을 랜더링할때 값을 통하여 업데이트 성능을 최적화.

````javascript
<div>A</div>
<div>B</div>
<div>C</div>
<div>D</div>
````

만약에 key를 부여하지 않으면, 배열의 index 값이 자동으로 key 값을 설정하게됨.
이떄 B와 C사이에 X를 집어넣는다고 가정. key가 배열의 인덱스로 설정된다면 아래처럼됨
````javascript
<div key={0}>A</div>
<div key={1}>B</div>
<div key={2}>C</div>
<div key={3}>D</div>
````

배열의 인덱스가 key값으로 사용됐다.
<div key={0}>A</div>
<div key={1}>B</div>
<div key={2}>X</div> [C -> X]
<div key={3}>D -> C</div> [D -> C]
<div key={4}>D</div> [새로 생성됨]

중간에 값이 들어가면 index도 함께 바뀌어 버리게 되니 X아래로 값이 바뀌게 된다.
key를 배열의 index값으로 사용하는게 아니라 데이터를 추가할 때마다 고정적인 고유값을 부여해주면,
리액트가 변화를 갑지해내고 업데이트를 하게될 때 조금 더 똑똑하게 처리할 수 있다.

<div key={0}>A</div>
<div key={1}>B</div>
<div key={5}>X</div> [새로 생성됨]
<div key={2}>C</div> [유지됨]
<div key={3}>D</div> [유지됨]

DOM은 하나만 생성되고, 나머지는 그대로 유지된다.
key값은 언제나 고유해야 한다.

데이터베이스에 데이터를 추가하면 주로 해당 데이터를 가르키는 고유 id가있다.
그러한 데이터를 리액트에서 렌더링하게된다면 그 고유 id를 가지고 key로 사용하면된다.
전화번호 정보에서 id값을 key값으로 사용해줌
PhoneInfoList 컴포넌트를 App 에서 렌더링해주고 date값을 props로 전달.

````javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
````

데이터에 고유값이 없을때 
- key값을 빼먹으면 렌더링이 되긴 하지만 개발자도구 콘솔에서 경고창이 뜨게된다.
아래와 같이 처리할 수 있다.
````javascript
 const list = data.map(
  (info, index) => (<PhoneInfo key={index} info={info}/>)
);
````
위처럼 하면 단순히 경고만 감출 뿐이고 성능상으로는 key가 없는것과 동일하다.
