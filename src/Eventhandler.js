import React, { Component } from 'react'

export default class Eventhandler extends Component {
    constructor(){
        super()
        this.state={
            name:"Bhavya",
            age:"26",
            college:"No.1",
            Batch:"02"
        }
    }

    clickHandler=()=>{
        this.setState({
            name: "Sree",
            age:"28",
            college:"No.02",
            Batch: "03"
        })
    }
  render() {
    return (
      <div>
        <p>Student Name : {this.state.name}</p>
        <p>Student Age: {this.state.age}</p>
        <p>College Name : {this.state.college}</p>
        <p>Batch No:{this.state.Batch}</p>

        <button onClick={this.clickHandler}>Update</button>
        
        
        </div>
    )
  }
}
