import React from "react";
import DisplayInfor from "./Displayinfor";
import UseInfor from "./Userinfor";


class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Manh", age: "30" },
            { id: 2, name: "Bin", age: "29" },
            { id: 3, name: "Ma", age: "31" },
        ]
    }




    //JSX
    render() {
        //destructuring array/object
        //DRY: don't repeat yourseft

        return (
            <div>
                <UseInfor />
                <br /><br />

                <DisplayInfor
                    listUsers={this.state.listUsers}
                    users={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;