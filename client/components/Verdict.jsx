import React from 'react'
import { connect } from 'react-redux'
import { setView, resetState } from '../actions/index'

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

    const eng = voices.find(voice => voice.lang === 'en-US')
    // console.log(voices)

    // console.log('hello siri')
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 2
    speech.voice = eng

    window.speechSynthesis.speak(speech)
  }

  handleClick = (e) => {
    this.props.dispatch(setView('login'))
    this.props.dispatch(resetState())
  }

  render () {
    console.log(this.props)
    return (
      <>
        <div className="container-3">
          <p className="VerdictMessage">{this.props.name} Are you good enough to date Siri?</p>
          <p className="score">Your score is {this.props.score}</p>

          {
            this.response(this.props.score)
          }
          <button onClick={this.handleClick} className="button-2">Get Another Chance At Love</button>

        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    name: state.name
  }
}

export default connect(mapStateToProps)(Verdict)
