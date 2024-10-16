import React from "react";

class UseInfor extends React.Component {

    state = {
        name: 'Manh',
        address: 'Da Nang',
        age: 27,
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
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and Im from {this.state.address} and age {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Name </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>submit</button>

                    <label>Age </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UseInfor;