import * as actions from "../constants/action-types";
import { defaultState } from "./defaultState";
import { meta } from "../../meta";

const albumsReducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case actions.FETCH_ALBUMS:
			if (payload.resultCount !== 0) {
				if (meta.debug) console.log("Results found..");
				return {
					...state,
					albums: payload.results
				};
			}
			if (meta.debug) console.log("No results found");
			return {
				...state,
				albums: []
			};

		case actions.CLEAR_ALBUMS:
			return {
				...state,
				albums: []
			};
		default:
			return state;
	}
};

export default albumsReducer;
