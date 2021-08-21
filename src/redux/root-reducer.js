import { combineReducers } from "redux";

import quoteReducer from "./quote/quote.reducer";

export default combineReducers({
  quote: quoteReducer
});