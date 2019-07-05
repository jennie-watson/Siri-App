import {RECIEVE_DATA} from '../actions/getData'

function getData (state = [], action) {
  switch (action.type) {
    case RECIEVE_DATA:
      return action.data

    default:
      return state
  }
}

export default getData
