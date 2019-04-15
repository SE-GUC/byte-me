import { combineReducers } from 'redux'
import coworkingReducer from './coworkingReducer'
import authReducer from './authReducer'

export default combineReducers({
    coworking: coworkingReducer,
    auth: authReducer
})