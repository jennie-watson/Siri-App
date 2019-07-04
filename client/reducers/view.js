const initialState = 'questions'

export default (state = initialState, { type, action }) => {
  switch (type) {
    case 'SET_VIEW':
      return { ...state, ...action }
    default:
      return state
  }
}
