import request from 'superagent'

export const GET_SCORE = 'GET_SCORE'

export const getScore = score => {
  return {
    type: GET_SCORE,
    score
  }
}
