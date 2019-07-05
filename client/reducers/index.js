import { combineReducers } from 'redux'
import verdict from './verdict'

import name from './name'
import view from './view'
import score from './score'
import data from './data'

export default combineReducers({
  verdict,
  data,
  name,
  score,
  view
})
