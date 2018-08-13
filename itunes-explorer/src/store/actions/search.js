import { EDIT_LAST_SEARCH } from './constants';

export const editLastSearch = (str) => dispatch => {
  return dispatch({type: EDIT_LAST_SEARCH, payload: str});
}
