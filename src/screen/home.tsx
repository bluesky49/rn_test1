import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "../component";
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/actions';
import { UserParam } from '../model/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home : FC = () => {

    const dispatch = useDispatch();
    const logoutHandler = (e: UserParam) => dispatch(Logout(e));
    
    const handleLogout = async () => {
        const user_string = await AsyncStorage.getItem('userInfo');
        const user = user_string && JSON.parse(user_string);
        await AsyncStorage.removeItem('userInfo');
        logoutHandler(user);
    };
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title='Log Out'
                onPress={handleLogout}
            />
        </View>
    );
};
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})