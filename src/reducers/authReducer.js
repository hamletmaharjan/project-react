
import * as authAction from '../actions/authAction';


const INITIAL_STATE = {
    auth: {
        id: '',
        email: '',
        token: '',
        name: ''
    },
    isLoggedIn: false
}

function authReducer(state = INITIAL_STATE, action) {
    // let myArray = [];
    switch(action.type) {
        case authAction.ADD_AUTH:
            return {
                auth: action.payload,
                isLoggedIn: state.isLoggedIn
            }

        case authAction.UPDATE_AUTH:
            return {
                auth: action.payload,
                isLoggedIn: state.isLoggedIn
            }
        
        case authAction.LOGIN:
            return {
                auth: action.payload,
                isLoggedIn: true,
            }
        case authAction.LOGOUT:
            return {
                auth: {
                    id: '',
                    email: '',
                    token: '',
                    name: ''
                },
                isLoggedIn: false
            }
        default:
            return state;
    }
    
}

export default authReducer;