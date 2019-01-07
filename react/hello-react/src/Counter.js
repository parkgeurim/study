import React, { Component } from "react";
import './App.css';

class Counter extends Component {
    state = {
        number :0
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

    render() {
        return (
            <div className={"buttonWrap"}>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <div className ={"buttonBox"}>
                    <button onClick={this.handleIncrease}>+</button>
                    <button onClick={this.handleDecrease}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;