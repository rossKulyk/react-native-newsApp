import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    news: newsReducer
});

// Redux DevTools extension
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);
