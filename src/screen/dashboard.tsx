import React, { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Setting, Account } from '../screen';

const Tab = createBottomTabNavigator();

const Dashboard: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName='home'
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                }}
            />
            <Tab.Screen
                name="account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
};
export default Dashboard;
