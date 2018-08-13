import axios from 'axios';
import {FETCH_ALBUMS, CLEAR_ALBUMS} from './constants';

let api = "https://itunes.apple.com/";
let search = "search?";
let artistQueryPrefix = "term="; 
let albumQuery = "&entity=album";

export const fetchAlbums = (artist) => dispatch => {

	let query = "" + api + search + artistQueryPrefix + artist + albumQuery;

	return axios.get(query)
	    .then(promise => dispatch({type: FETCH_ALBUMS, payload: promise.data}))
	
}

export const clearAlbums = () => dispatch => {

	return dispatch({type: CLEAR_ALBUMS, payload: []});
}
