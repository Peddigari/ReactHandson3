import React, { Component } from 'react'
import './style.css'
class ChildClass extends Component {
    constructor(props){
    super(props);
    console.log(this.props.value);
    }
    render() {
        return (
            <>
            <h1>Employee Form</h1>
            <div className="parent">
            {
               
                this.props.value.map((item,index)=>{
                    return(
                        
                            <p className="box" key={index}>Name:{item.name}||Department:{item.dept}||Rating:{item.rate}</p>
                        
                        
                
                    )})
            }
            </div>

            <button onClick={this.props.toggleFunc}>Go Back</button>
            </>
        )
    }
}
export default ChildClass;