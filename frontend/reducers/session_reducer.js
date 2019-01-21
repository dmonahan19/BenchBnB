import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullState = { id: null };

const sessionReducer = (state = _nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            // return Object.assign({}, {id: action.currentUser.id}); we dont need to use
            // Object.assign because we only care about having 1 user and we dont need to add the 
            //user to other users
            return { id: action.currentUser.id }

        case LOGOUT_CURRENT_USER:
            return _nullState;
        default:
            return state; 
    }

};

export default sessionReducer;