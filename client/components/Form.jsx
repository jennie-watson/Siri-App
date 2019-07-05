import React from 'react'
import { connect } from 'react-redux'
import { getData, setScore } from '../actions/getData'
import { setView } from '../actions'

class Form extends React.Component {

  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0
  }

  calcScore = (e) => {
    e.preventDefault()
    const { one, two, three, four, five } = this.state
    const total = Number(one) + Number(two) + Number(three) + Number(four) + Number(five)
    this.props.dispatch(setScore(total))
    this.props.dispatch(setView('verdict'))
  }

  componentDidMount() {
    this.props.dispatch(getData())
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name
    console.log(value)

    if (name === 'one') {
      this.talk('hmmm')
    } else if (name === 'two') {
      this.talk('oooh')
    } else if ( name === 'three'){
      this.talk('really?')
    }else if ( name === 'three'){
      this.talk('oh')
    }else if ( name === 'four'){
      this.talk('finally')
    }else if ( name === 'five'){
      this.talk('mmm yes')
    }


    this.setState({
      [name]: value
    })
  }

  talk = (message = 'hello keith') => {

    const voices = window.speechSynthesis.getVoices()

    // voices.map( voice => voice.name)
    // console.log(voices)

    // console.log('hello siri')
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 2
    // speech.voice = voices[50]

    window.speechSynthesis.speak(speech)
  }

  render() {
    const { name, data } = this.props
    return (
      <div>
        <form onSubmit={this.calcScore} >
          {data[0] && data.map(question => {
            return (
              <div>
                <h1>{question.questions}</h1>
                <select onChange={this.handleInputChange} name={question.name}>
                <option>Please select an option...</option>
                  {question.answers.map((answer, i) => {
                    return (
                      <option value={question.score[i]}>{answer}</option>
                    )
                  })}
                </select>
              </div>
            )
          })}
          <br /><br />
          <button type="submit">Check your Siri Compatibility</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    name: state.name
  }
}

export default connect(mapStateToProps)(Form)