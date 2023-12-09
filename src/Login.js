import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:"",
            password:""
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    handleUsername(event){
        this.setState({username:event.target.value})
    }

    handlePassword(event){
        this.setState({password:event.target.value})
    }

    submitHandler(event){
       event.preventDefault()
       console.log(this.state.username, this.state.password)
    }
  render() {
    return (
      <div>
        <h1>Login form</h1>
        <form onSubmit={this.submitHandler}>
        <input type='text' value={this.state.username} onChange={this.handleUsername}/>
        <input type='password' value={this.state.password} onChange={this.handlePassword}/>
        <input type='submit' value="Submit"/>
        </form>

        <p> Your Credential are : {this.state.username}, {this.state.password}</p>
      </div>
    )
  }
}
