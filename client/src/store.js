import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { countryListReducer } from "./reducers/countryReducer";

const reducer = combineReducers({
  countryList: countryListReducer,
});

const middleware = [thunk];
const initialState = {};
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
