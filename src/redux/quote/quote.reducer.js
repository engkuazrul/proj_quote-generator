const INITIAL_STATE = {
  quoteText: 'NO QUOTE FOR NOW :)',
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
    default:
      return state;
  }
}

export default quoteReducer;