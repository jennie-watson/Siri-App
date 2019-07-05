import React from 'react'
import { connect } from 'react-redux'

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
  
  render () {
    console.log(this.props)
    return (
      <>
      <p className="VerdictMessage">Tamari, are you good enough to date Siri?</p>
      <p>Your score is {this.props.score}</p>
        
        {
          this.response(this.props.score)
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.verdict
  }
}

export default connect(mapStateToProps)(Verdict)

// heading
// pull score in
// pull message in
