import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setName, setView } from '../actions'



class Login extends React.Component {
  state = {
    name: ''
  }

  talk = (message = 'hello keith') => {

    const voices = window.speechSynthesis.getVoices()

    // voices.map( voice => voice.name)
    // console.log(voices)

    console.log('hello siri')
    const speech = new SpeechSynthesisUtterance()
    speech.text = 'hello ' + message
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 3
    // speech.voice = voices[50]

    window.speechSynthesis.speak(speech)
  }

  handleInput = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.talk(this.state.name)
    this.props.dispatch(setName(this.state.name))
    this.props.dispatch(setView('questions'))
  }
  render() {
    return (
      <div className="container">
        <div className='loginForm'>
          <h1>Are you worthy of SIRI ???</h1>
          <h2>Try Your Luck!</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="enter name" onChange={this.handleInput} value={this.state.name} />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
