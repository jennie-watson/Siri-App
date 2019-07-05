import request from 'superagent'

export const SET_NAME = 'SET_NAME'
export const SET_VIEW = 'SET_VIEW'

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
