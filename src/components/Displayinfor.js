import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'
import noels from './../noels.jpg'


class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser // set lai gia tri phu dinh
        })
    }
    render() {
        //destructuring array/object
        const { listUsers } = this.props; // object
        //const listUsers = this.props.listUsers;
        //props => viết tắt property
        //console.log(listUser)
        //console.log(listUsers)
        //console.table(listUsers)
        //temple + logic js
        return (
            <div className='display-infor-container'>
                <img src={logo} />
                <img src={noels} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "Hide list users:" : "Hide list users:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>

                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;