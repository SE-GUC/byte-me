import { LOGIN, LOGOUT } from './actionTypes';
import axios from 'axios';

import setAuthToken  from '../../helpers/setAuthToken'

export const login = () => dispatch => {
	dispatch({
		type: LOGIN,
		payload: {
			organizationName: 'Ammar',
			email: 'email',
		},
	});
};

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};


 export const login = (userData) => dispatch => {
 	axios.post('http://localhost:4000/api/partner/login', userData)
 	.then( res => {
	 	const { token } = res.data
	 	localStorage.setItem('jwtToken', token)
	 	setAuthToken(token)

	 })
	 .catch(err => console.log('error'))
		
	 };