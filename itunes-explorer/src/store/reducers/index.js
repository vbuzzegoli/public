import { combineReducers } from "redux";

import albumsReducer from "./albums";
import searchReducer from "./search";

export default combineReducers({
	searchResults: albumsReducer,
	searchInfo: searchReducer
});
