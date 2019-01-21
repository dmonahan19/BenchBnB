import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state={},action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.id]: action.currentUser});
            // we need to merge in this case because we want to add the new user in with
            // all the previous users and not replace all the users with the one user
        default:
            return state;
    }

};