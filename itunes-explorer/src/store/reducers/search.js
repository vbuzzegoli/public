import * as actions from "../constants/action-types";
import { defaultState } from "./defaultState";

const searchReducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case actions.EDIT_LAST_SEARCH:
			return {
				...state,
				lastSearch: payload
			};
		default:
			return state;
	}
};

export default searchReducer;
