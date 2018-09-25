import * as actions from "../constants/action-types";

export const editLastSearch = str => dispatch =>
	dispatch({ type: actions.EDIT_LAST_SEARCH, payload: str });
