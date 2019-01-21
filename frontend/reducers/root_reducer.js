import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer
});

// {
//     entities: {
//         users: { }
//     },
//     session: {
//         id: null,
//   },
//     errors: {
//         session: []
//     }
// }
// initially looks like this because:
// users is set to an empty object initially in the userreducer
// session reducer sets id to null
// errors set session to an empty array
