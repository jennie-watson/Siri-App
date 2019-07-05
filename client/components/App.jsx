import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Verdict from './Verdict'

const App = ({ view }) => (
  <>
    {
      displayView(view)
    }
  </>
)

const displayView = view => {
  if (view === 'login') {
    return <Login />
  } else if (view === 'questions') {
    return 'questions'
  } else if (view === 'verdict') {
    return <Verdict />
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(App)
