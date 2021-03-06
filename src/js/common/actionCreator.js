import { ActionTypes } from './Constants';

const receiveUser = user => ({
    type: ActionTypes.RECEIVE_USER,
    user
});

const attemptLogin = () => dispatch => {
    setTimeout(() => {
        dispatch(receiveUser({ name: 'Rosy', email: 'rosy.m.tucker@gmail.com' }));
    }, 500);
};

export {
    attemptLogin,
    receiveUser
};
