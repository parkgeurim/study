PhoneForm 디렉토리 생성
````terminal
create-react-app Phone-book
````

1. PhoneForm 컴포넌트 만들기
PhoneForm.js
````javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default PhoneForm;
````
onChange 이벤트가 발생하면 e.target.value값을 통하여 이벤트 객체에 담겨있는 텍스트값을 읽어올 수 있다.
해당값을 state의 name 부분으로 설정
onChange는 input의 텍스트 값이 바뀔때마다 발생하는 이벤트이고, 여기에 만들어둔 handleChange를 설정.
그리고 나중에 데이터를 등록하고나면 이 name값으 공백으로 초기화. 초기화됐을때 input에서도 반영이 되도록 value값을 설정
하단에 바뀌는 name 값 확인.


- input 하나를 추가
````javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    );
  }
}

export default PhoneForm;
````
input name값을 부여하여 구분,
이 name값은 event.target.name을 통하여 조회가능하다.


부모 컴포넌트에게 정보 전달하기
- 부모 컴포넌트에서 메소드를 만들고, 이 메소드를 자식에게 전달한 다음에 자식 내부에서 호출하는 방식을 사용
App에서 handleCreate라는 메소드를 만들고, 이를 PhoneForm한테 전달.
PhoneForm쪽에서 버튼을 만들어 submit이 발생하면 props로 받은 함수를 호출하에 App에서
파라미터로 받은 밧을 사용할 수있도록
````javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
````
PhoneForm에서 onSubmit 이벤트를 설정
````javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
````
e.preventDefault(); 의 원래 뜻은 이벤트가 해야 하는 작업을 방지시킨다는 의미
form에서 submit이 발생하면 페이지를 다시 불러오게 되는데 그렇게 되면 지니고 있는 상태를 읽어버림 . 이를방지하기 위해서
e.preventDefault() 를 사용
그 다음에는 props로 받은 onCreate함수를 호출하고, 상태값을 초기화
render 부분에 submit버튼을 만들고 form부분에 onSubmit 이벤트를 등록
