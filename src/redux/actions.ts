import { UserParam } from "../model/user";

export const signup = (user : UserParam) => {

    return (dispatch:any) => {
        dispatch({
            type: 'SIGNUP',
            payload: user
        });
    };
};

export const Logout = (user: UserParam) => {
    return (dispatch: any) => {
        dispatch({
            type: 'LOGOUT',
            payload: user
        });
    };
};

export const login = (user: UserParam) => {
    return (dispatch: any) => {
        dispatch({
            type: 'LOGIN',
            payload: user
        })
    };
};