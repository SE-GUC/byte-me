import {GET_CO } from './actionTypes';
import axios from 'axios';

export const getAllCoworking = () => dispatch => {
	axios.get('http://localhost:4000/api/coworking/')
		.then(res =>
			dispatch({
				type: GET_CO,
				payload: res.data.books,
			})
		);
}

