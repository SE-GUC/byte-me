import { LOGIN, LOGOUT, TYPE } from './actionTypes';
import axios from 'axios';

import setAuthToken  from '../../helpers/setAuthToken'

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};

export const type = () => dispatch => {
	dispatch({ type: TYPE });
};

export const login = () => dispatch => {
	dispatch({
		type: LOGIN,
		payload: {
			username: '',
			email: '',
			type: ''
		},
	});
};
