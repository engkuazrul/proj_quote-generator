const INITIAL_STATE = {
  quoteText: 'Sorry, please try again :)',
  quoteAuthor: 'admin'
}

const quoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_QUOTE_TEXT':
      return {
        ...state,
        quoteText: action.payload
      }
    case 'SET_QUOTE_AUTHOR':
      return {
        ...state,
        quoteAuthor: action.payload
      }
    case 'RESET_QUOTE':
        return INITIAL_STATE;
    default:
      return state;
  }
}

export default quoteReducer;