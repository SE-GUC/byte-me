import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  LOGIN,
  LOGOUT
} from "./ypes";
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
	
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/api/partner/", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:4000/api/partner/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};










// import { LOGIN, LOGOUT } from './actionTypes';
// import axios from 'axios';

// import setAuthToken  from '../../helpers/setAuthToken'

// export const login = () => dispatch => {
// 	dispatch({
// 		type: LOGIN,
// 		payload: {
// 			organizationName: 'Ammar',
// 			email: 'email',
// 		},
// 	});
// };

// export const logout = () => dispatch => {
// 	dispatch({ type: LOGOUT });
// };


//  export const login = (userData) => dispatch => {
//  	axios.post('http://localhost:4000/api/partner/login', userData)
//  	.then( res => {
// 	 	const { token } = res.data
// 	 	localStorage.setItem('jwtToken', token)
// 	 	setAuthToken(token)

// 	 })
// 	 .catch(err => console.log('error'))
		
// 	 };