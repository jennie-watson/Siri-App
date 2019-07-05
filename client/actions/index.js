export const SET_NAME = 'SET_NAME'
export const SET_VIEW = 'SET_VIEW'
export const RESET_STATE = 'RESET_STATE'

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

export const resetState = () => {
  return {
    type: RESET_STATE
  }
}
