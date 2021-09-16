import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    allNews: newsReducer
});

// REDUX DEVTOOLS EXTENSION
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);
