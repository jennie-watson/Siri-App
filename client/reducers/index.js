import { combineReducers } from 'redux'
import verdict from './verdict'
import name from './name'
import view from './view'

export default combineReducers({
  verdict,
  name,
  view
})
