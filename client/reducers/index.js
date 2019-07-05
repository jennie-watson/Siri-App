import { combineReducers } from 'redux'

import name from './name'
import view from './view'
import score from './score'
import data from './data'

export default combineReducers({
  data,
  name,
  score,
  view
})
