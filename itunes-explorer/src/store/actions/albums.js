import axios from 'axios';
import {FETCH_ALBUMS, CLEAR_ALBUMS} from './constants';

const api = "https://itunes.apple.com/";
const search = "search?";
const artistQueryPrefix = "term="; 
const albumQuery = "&entity=album";

export const fetchAlbums = (artist) => dispatch => {

	const query = "" + api + search + artistQueryPrefix + artist + albumQuery;

	return axios.get(query)
	    .then(promise => dispatch({type: FETCH_ALBUMS, payload: promise.data}))
	
}

export const clearAlbums = () => dispatch => {

	return dispatch({type: CLEAR_ALBUMS, payload: []});
}
