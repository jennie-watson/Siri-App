import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'

import name from './name'
import view from './view'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  name,
  view
})
