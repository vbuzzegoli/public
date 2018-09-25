import axios from "axios";
import * as actions from "../constants/action-types";

const api = "https://itunes.apple.com/";
const search = "search?";
const artistQueryPrefix = "term=";
const albumQuery = "&entity=album";

export const fetchAlbums = artist => dispatch => {
	const query = `${api}${search}${artistQueryPrefix}${artist}${albumQuery}`;

	return axios
		.get(query)
		.then(promise =>
			dispatch({ type: actions.FETCH_ALBUMS, payload: promise.data })
		);
};

export const clearAlbums = () => dispatch =>
	dispatch({ type: actions.CLEAR_ALBUMS, payload: [] });
