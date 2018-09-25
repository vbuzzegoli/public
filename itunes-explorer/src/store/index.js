import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";
import axiom from "../mw/axiom";

const middleware = [thunk, axiom];

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	rootReducer,
	withDevTools(applyMiddleware(...middleware))
);
