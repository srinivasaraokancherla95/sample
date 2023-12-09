import React, { Component } from 'react'
import './List'



export default class List extends Component {
    constructor(){
        super()
        this.state={
            employees : [
                {id:1, name:"Srinivas", age:"28", profission: "Frontend Developer" },
                {id:2,name:"Bhavya Sree", age:"27", profission: "Backend Developer" },
                {id:4,name:"Harish", age:"30", profission: "Mechanical Engineer" },
                {id:3, name:"Keerthi", age:"29", profission: "Chemistry Lecture"},
                {id:5, name:"Vasu", age:"30", profission: "Vasu Enterprice Limitted" },
            ]

        }
    }
  render() {
    return (
      <table border = "1">
        {this.state.employees.map((emp)=>{
            return(
                <tr key={emp.id}>
                    <td> {emp.name}</td>
                    <td>{emp.age}</td>
                    <td>{emp.profission}</td>
                </tr>
            )
        })}
      </table>
    )
  }
}
