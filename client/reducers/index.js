import { combineReducers } from 'redux'
import verdict from './verdict'

import errorMessage from './error-message'
import data from './data'
import waiting from './waiting'

import name from './name'
import view from './view'
import score from './score'

export default combineReducers({
  verdict,
  data,
  name,
  score,
  view
})
