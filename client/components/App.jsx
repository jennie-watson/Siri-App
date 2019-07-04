import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'

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
    return 'verdict'
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(App)
