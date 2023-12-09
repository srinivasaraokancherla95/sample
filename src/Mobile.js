import React, { Component } from 'react'

export default class Mobile extends Component {
  constructor(){
    super()
    this.state={
        name:"Iphone",
        Os:"IOS17",
        price:"75,000",
        Launchdate:"Aug,2023"
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(){
    this.setState({
        name:"Samsung",
        Os:"IOs16",
        price:"85,000",
        Launchdate:"january, 2023"
    })
  }
  render() {
    return (
      <div>
        Mobile
        <p>{this.state.name}</p>
        <p>{this.state.Os}</p>
        <p>{this.state.price}</p>
        <p>{this.state.Launchdate}</p>

        <button onClick={this.handleUpdate}>Click to Update</button>
        </div>
    )
  }
}
