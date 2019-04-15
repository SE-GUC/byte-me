import { LOGIN, LOGOUT } from './actionTypes';
import axios from 'axios';

import setAuthToken  from '../../helpers/setAuthToken'

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};

export const login = (userData) => dispatch => {
	axios.post('http://localhost:4000/api/coworking/login', userData).then( res => {
	const { token } = res.data
	localStorage.setItem('jwtToken', token)
	setAuthToken(token)
	dispatch({type : LOGIN })
	}).catch(err => console.log('error'))
};
