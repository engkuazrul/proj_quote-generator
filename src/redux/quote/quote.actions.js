export const setQuoteText = quote => ({
  type: 'SET_QUOTE_TEXT',
  payload: quote
});

export const setQuoteAuthor = quote => ({
  type: 'SET_QUOTE_AUTHOR',
  payload: quote
});

export const resetQuote = quote => ({
  type: 'RESET_QUOTE'
})