import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const GET_DATA = 'GET_DATA'
export const RECIEVE_DATA = 'RECIEVE_DATA'
export const SCORE = 'SCORE'

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

export const setScore = (score) => {
  return {
    type: SCORE,
    score: score
  }
}

export function getData () {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get('/api/questions')
      .then(res => {
        const mapped = res.body.map(item => {
          return {
            id: item.id,
            name: item.name,
            questions: item.questions,
            answers: JSON.parse(item.answers),
            score: JSON.parse(item.score)
          }
        })
        console.log(mapped)
        dispatch(receivePosts(mapped))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
