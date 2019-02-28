import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '이름1',
                phone: '01000000000'
            },
            {
                id: 1,
                name: '이름2',
                phone: '01000000001'
            }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information:
                information.concat({ id: this.id++, ...data })
        })
    }
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }

    render() {
        const { information } = this.state;
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList
                    data={this.state.information}
                    onRemove={this.handleRemove}
                />
            </div>
        );
    }
}

export default App;