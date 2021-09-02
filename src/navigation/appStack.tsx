import React, { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Setting, Account } from '../screen';
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const AppStack : FC = () => {
    
    return (
        <View style={styles.container}>
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
            {/* <Home /> */}
        </View>
    );
};
export default AppStack;

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        
    },
})