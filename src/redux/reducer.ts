import * as types from './types';
import { initialState } from './initialState';

export const usersReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case types.SIGNUP:
            return {
                ...state,
                users: [...state.users, Object.assign(action.payload, {isLoggedin: true})],
            }
        case types.LOGOUT:
            let signupUser = state.users.filter(i => i.email === action.payload.email);
            const exceptUsers = state.users.filter(i => i.email !== action.payload.email);
            return {
                ...state,
                users: [...exceptUsers, Object.assign(signupUser[0], {isLoggedin: false})]
            }
        case types.LOGIN:
            const loggedUser = state.users.filter(i => i.email === action.payload.email && i.password === action.payload.password);
            const exceptLoggedUsers = state.users.filter(i => i.email !== action.payload.email);
            return {
                ...state,
                users: [...exceptLoggedUsers, Object.assign(loggedUser[0], {isLoggedin: true})]
            }
        default:
            return state;
    }
}