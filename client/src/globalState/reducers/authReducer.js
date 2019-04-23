import { LOGIN, LOGOUT, SET_CURRENT_USER,
    USER_LOADING } from '../actions/actionTypes'
    const isEmpty = require("is-empty");

const initialState = {
    isLoggedIn: false,
    isAuthenticated: false,
    loading: false,
    loggedUser: {}
    
}

export default function(state = initialState, action) {
        switch(action.type) {
            case LOGIN: 
            return {
                ...state,
                isLoggedIn: true,
                loggedUser: action.payload,
                checkType: action.payload.type
            }
            case LOGOUT: 
            return {
                ...state,
                isLoggedIn: false,
                loggedUser: {}
            }
            case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
            default: return state
        }
}