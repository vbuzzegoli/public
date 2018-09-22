import { EDIT_LAST_SEARCH } from "./constants";

export const editLastSearch = str => dispatch =>
	dispatch({ type: EDIT_LAST_SEARCH, payload: str });
