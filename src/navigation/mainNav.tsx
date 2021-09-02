import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appStack";
import AuthStack from "./authStack";
import { useSelector } from 'react-redux';
import { UserParam, StateParam } from '../model/user';

const MainNav : FC = () => {
    const { users } = useSelector((state: StateParam) => state.usersReducer);
    const loggedUser = users.filter((i: UserParam) => i.isLoggedin);

    return (
        <NavigationContainer>
            { loggedUser.length !== 0 ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    );
};
export default MainNav;