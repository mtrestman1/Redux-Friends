import { LOGIN_START, LOGIN_SUCCESS } from '../actions';

const initialState = {
    friends: [],
    deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state, 
            loggingIn: true
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            friends: action.payload
        }
        default: 
        return state;
    }
    };

    export default reducer;