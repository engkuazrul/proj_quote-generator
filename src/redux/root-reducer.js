import { combineReducers } from "redux";

import quoteReducer from "./quote/quote.reducer";
import loaderReducer from "./loader/loader.reducer";

export default combineReducers({
  quote: quoteReducer,
  loader: loaderReducer
});