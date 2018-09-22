import { EDIT_LAST_SEARCH } from "../actions/constants";
import { defaultState } from "./defaultState";

const searchReducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case EDIT_LAST_SEARCH:
			return {
				...state,
				lastSearch: payload
			};
		default:
			return state;
	}
};

export default searchReducer;
