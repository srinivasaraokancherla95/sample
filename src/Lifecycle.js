import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor(){
        super()
        this.state={
            age:29
        }

    }

    componentDidMount(){
        console.log("ComponentDidmount method")
        this.setState({
            age:35
        })
    }

    componentDidUpdate(){
        document.write = this.state.age
    }

    componentWillUnmount(){
        
    }
  render() {
    return (
      <div>Lifecycle
        <p>{this.state.age}</p>
      </div>
    )
  }
}
