import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const GET_DATA = 'GET_DATA'
export const RECIEVE_DATA = 'RECIEVE_DATA'

export const requestPosts = () => {
  return {
    type: GET_DATA
  }
}

export const receivePosts = (data) => {
  return {
    type: RECIEVE_DATA,
    data: data
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function getData () {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get('/api/questions')
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
