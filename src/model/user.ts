export interface UserParam {
    email: string,
    name: string,
    password: string,
    isLoggedin: boolean,
};

export interface StateParam {
    usersReducer: any;
    users: UserParam[]
}