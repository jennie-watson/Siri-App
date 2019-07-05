import React from 'react'
import { connect } from 'react-redux'
import { getData, setScore } from '../actions/getData'

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
  }

  componentDidMount() {
    this.props.dispatch(getData())
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name
    console.log(value)


    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, data } = this.props
    return (
      <div className='container-2'>
        <form onSubmit={this.calcScore} >
          {data[0] && data.map(question => {
            return (
              <div className='formStyle'>
                <h1>{question.questions}</h1>
                <select onChange={this.handleInputChange} name={question.name}>
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
          <button type="submit" className="buttonForm">Check your Siri Compatibility</button>
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
