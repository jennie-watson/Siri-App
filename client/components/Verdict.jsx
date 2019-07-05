import React from 'react'
import { connect } from 'react-redux'
import { setView } from '../actions/index'

class Verdict extends React.Component {
  response = (score) => {
    if (score < 5) {
      return 'ew, get away from me'
    } else if (score > 11) {
      return 'i love you '
    } else {
      return 'you aight'
    }
  }

  handleClick = (e) => {
    this.props.dispatch(setView('login'))
  }

  render () {
    console.log(this.props)
    return (
      <div className="container-3">
      <>
        <p className="VerdictMessage">Tamari, are you good enough to date Siri?</p>
      <p>Your score is {this.props.score}</p>

          {
            this.response(this.props.score)
          }
    <button onClick={this.handleClick}>Get Another Chance At Love</button>

      </>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.verdict
  }
}

export default connect(mapStateToProps)(Verdict)
