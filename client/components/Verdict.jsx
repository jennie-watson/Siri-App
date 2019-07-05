import React from 'react'
import { connect } from 'react-redux'
import { setView } from '../actions/index'

class Verdict extends React.Component {

  response = (score) => {
    if (score < 5) {
      this.talk('ew, get away from me')
    } else if (score > 11) {
      this.talk('i love you ') 
    } else {
      this.talk('you aight ') 
    }
  }

  talk = (message = 'hello keith') => {

    const voices = window.speechSynthesis.getVoices()

    // voices.map( voice => voice.name)
    // console.log(voices)

    console.log('hello siri')
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 3
    speech.voice = voices[3]

    window.speechSynthesis.speak(speech)
  }

  handleClick = (e) => {
    
    this.props.dispatch(setView('login'))
  }

  render () {
    console.log(this.props)
    return (
      <>
      <p className="VerdictMessage">Tamari, are you good enough to date Siri?</p>
      <p>Your score is {this.props.score}</p>
        
        {
          this.response(this.props.score)
        }
        <button onClick={this.handleClick}>Get Another Chance At Love</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
  }
}

export default connect(mapStateToProps)(Verdict)
