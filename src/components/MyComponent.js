import React from "react";
import DisplayInfor from "./Displayinfor";
import AddUserInfor from "./AddUserinfor";


class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Manh", age: "30" },
            { id: 2, name: "Bin", age: "12" },
            { id: 3, name: "Ma", age: "59" },
        ]
    }

    handleAddNewUser = (userObj) => {

        console.log(">>> check data from parent: ", userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (useId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== useId);
        this.setState({
            listUsers: listUsersClone
        })
    }


    //JSX
    render() {
        //destructuring array/object
        //DRY: don't repeat yourseft

        return (
            <>

                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser} // tham chiếu không đóng mở ngoặc, gọi về biến thì đóng ()
                    />
                    <br /><br />

                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />

                </div>
                <div className='b'>

                </div>
            </>
        );
    }
}
export default MyComponent;