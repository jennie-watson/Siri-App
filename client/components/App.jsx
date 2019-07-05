import React from 'react'
import { connect } from 'react-redux'

<<<<<<< HEAD
import Verdict from './Verdict'

const App = () => (
  <div className='app'>
    <Verdict/>
  </div>
=======
import Login from './Login'

const App = ({ view }) => (
  <>
    {
      displayView(view)
    }
  </>
>>>>>>> fe8f5793a7d9219da9ec4f06576ac674079f0578
)

const displayView = view => {
  if (view === 'login') {
    return <Login />
  } else if (view === 'questions') {
    return 'questions'
  } else if (view === 'verdict') {
    return 'verdict'
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(App)
