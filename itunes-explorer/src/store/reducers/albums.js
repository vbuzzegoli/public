import { FETCH_ALBUMS, CLEAR_ALBUMS } from '../actions/constants';
import { defaultState } from './defaultState';
import { meta } from '../../meta';


const albumsReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
      case FETCH_ALBUMS:
      	if (payload.resultCount !== 0) {
      		if (meta.debug) { console.log("Results found.."); }
      		return {...state,
      			albums: payload.results
      		}; 
      	} else {
      		if (meta.debug) { console.log("No results found"); }
      		return {...state,
      			albums: []
      		}; 
      	}
      case CLEAR_ALBUMS:
        return {...state,
      			albums: []
      		}; 
      default:
        return state;
    }
}

export default albumsReducer;