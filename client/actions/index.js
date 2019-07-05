import request from 'superagent'

export const GET_SCORE = 'GET_SCORE'
export const SET_NAME = 'SET_NAME'
export const SET_VIEW = 'SET_VIEW'

export const getScore = score => {
  return {
    type: GET_SCORE,
    score
  }
}

export const setName = (name) => {
  return {
    type: SET_NAME,
    name
  }
}

export const setView = (view) => {
  return {
    type: SET_VIEW,
    view
  }
}
