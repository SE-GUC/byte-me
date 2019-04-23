import { LOGIN, LOGOUT } from '../actions/actionTypes'

const initialState = {
    isLoggedIn: false,
    loggedUser:{},
    checkType:null
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
                loggedUser: {},
                checkType: null
            }
            default: return state
        }
}