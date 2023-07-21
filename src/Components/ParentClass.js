import React, { Component } from 'react'
import ChildClass from "./ChildClass";
class ParentClass extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Dept: "",
            Rating: "",
            clicked: true,
            EmpData: []

        }
    }
    changeHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    toggleFunc = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    clickHandle = () => {
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            rate: this.state.Rating

        }
        this.state.EmpData.push(newObj)
        this.setState({
            EmpData: this.state.EmpData,
            Name: '',
            Dept: '',
            Rating: '',
            clicked: false
        })
        console.log(this.state.EmpData)
    }
    render() {
        return (
           <>
           
                            {this.state.clicked ?
                            <form className="child">
                                <div>
                            <p className="head">EMPLOYEE FEEDBACK FORM</p>

                                    <label htmlFor="name">NAME:</label>
                                    <input className="inpt" type="text" id="name" name="Name" placeholder="Enter Name" value={this.state.Name} onChange={this.changeHandle} required /><br />
                                </div>
                                {/* <label htmlFor="lastname">LAST NAME:</label> */}
                                {/* <input type="text" id="lastname" name="lastName" value={this.state.lastName} onChange={this.changeHandle} required/><br/> */}
                                <div>
                                    <label htmlFor="dept">DEPARTMENT:</label>
                                    <input className="inpt" type="text" id="dept" name="Dept" placeholder="Enter Department" value={this.state.Dept} onChange={this.changeHandle} required /><br />
                                </div>
                                <div>
                                    <label htmlFor="rate">RATING:</label>
                                    <input className="inpt" type="text" id="rate" name="Rating" placeholder="Enter Rating" value={this.state.Rating} onChange={this.changeHandle} required /><br />
                                </div>
                                <div className="btn">
                                    <button type="button" onClick={this.clickHandle}>Submit</button>
                                </div>
                            </form>
                :
            
                <ChildClass value={this.state.EmpData} toggleFunc={this.toggleFunc} />
               
                }
            
           </>
                
        )

    }
}
export default ParentClass;
