import React from "react";
import UseInfor from "./Userinfor";
import DisplayInfor from "./Displayinfor";

class MyComponent extends React.Component {
    // Cash 1:handleClick = (event) => {

    // handleClick() {
    //     console.log(">>> clik me buttton")

    //     this.setState({
    //         name: 'Bin',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })

    //     //merge State =>react class   
    //     this.setState({
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })
    // }


    //JSX
    render() {
        //destructuring array/object
        const { age, name } = this.props;
        return (
            <div>
                <UseInfor />
                <br /><br />
                <DisplayInfor name={"Manh"} age={'30'} />
                <hr />
                <DisplayInfor name="Manh" age={26} />
            </div>
        );
    }
}
export default MyComponent;