import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setName, setView } from '../actions'

class Login extends Component {
  state={
    name: ''
  }

  handleInput = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch(setName(this.state.name))
    this.props.dispatch(setView('questions'))
  }
  render () {
    return (
      <div className = 'loginForm'>
        <h1>Are you worthy of SIRI ???</h1>
        <h2>Try Your Luck!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter name" onChange={this.handleInput} value={this.state.name}/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Login)
