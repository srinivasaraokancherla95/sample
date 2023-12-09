import React, { Component } from 'react'
import './Student.css'

export default class Student extends Component {

    constructor() {
        super()
        this.state={
            marks:{ 
                telugu: 95,
                english:85,
                Maths:95,
                Computers:97

            }
        }
    }
  render() {
    return (
      <div>
        <p>Telugu: {this.state.marks.telugu}</p>
        <span class="eng">English: {this.state.english}</span>
        <h1 id="sr">Maths: {this.state.maths}</h1>
      </div>
    )
  }
}
