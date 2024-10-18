import React from 'react'


class AddUseInfor extends React.Component {

    state = {
        name: '',
        address: 'Da Nang',
        age: '',
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-ramdom',
            name: this.state.name,
            age: this.state.age,
        });
    }

    render() {
        return (
            <div>
                <h1 className='text-ellipsis font-sans underline'>
                    My name is {this.state.name} and Im from {this.state.address} and Age {this.state.age}
                </h1>

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Name </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Age </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUseInfor;