import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName.js';

class App extends Component {
  render() {
      const style = {
          backgroundColor : 'black',
          padding : '16px',
          color : 'white',
          fontSize : '12px',
          width : '100px',
          textAlign : 'center',
      };
    return (
        <div>
            {/*주석 사용 방법*/}
            <div style = {style}>
                hi hihihi
            </div>

            <div className= "App"
                //태그안에서 주석 사용할때
                 >react
            </div>

            <MyName name="리액트"/>
        </div>


    );
  }
}

export default App;
