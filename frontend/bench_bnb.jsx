import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

// only used for testing
import {
    signup,
    login,
    logout,
} from './actions/session_actions';
import {fetchBenches} from './util/bench_api_util';
window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchBenches = fetchBenches;
window.dispatch = store.dispatch;
window.getState = store.dispatch;
window.fetchBenches = fetchBenches;
