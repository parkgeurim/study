import React, { Component } from "react";
import './App.css';

const Problematic = () => {
    throw (new Error ('버그가나타났다!'));
    return (
        <div>
        </div>
    );
};

class Counter extends Component {
    state = {
        number :0,
        error : false
    }

    constructor(props) {
        super (props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5의 배수일때 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        // shouldComponentUpdate에서 ture를 반환하였을때 실행됨
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        // shouldComponentUpdate에서 ture를 반환하였을때 실행됨
        console.log('componentDidUpdate');
    }


    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number : number +1
        })
    }

    handleDecrease = () => {
        this.setState (
            ({ number }) => ({
                number : number -1
            })
        );
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error:true
        });
    }

    render() {
        if (this.state.error) return (<h1>에러발생</h1>);
        return (
            <div className={"buttonWrap"}>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;