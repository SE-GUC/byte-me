import { GET_CO } from '../actions/actionTypes'

const initialState = {
    coworkings: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CO:   
        return {
            ...state,
            coworkings: action.payload
        }
        default: return state
    }
}