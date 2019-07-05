import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/index'

class Form extends React.Component {

  state = {
    Question1: 0,
    Question2: 0,
    Question3: 0,
    Question4: 0,
    Question5: 0
  }
  render() {
    const { name, data } = this.props
    return (
      <div>
        <form>
          {data.map(question => {
            return (
              <select name={question.id}>
                {question.answers.map((answer, i => {
                  return (
                    <option value={question.score[i]}>{answer}</option>
                  )
                }))}
              </select>
            )
          })}
          <br /><br />
          <input type="submit" />
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

export default connect()(Form)