import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from "../component";
import { StateParam, UserParam } from '../model/user';
import { login } from '../redux/actions';

interface loginProps {
    navigation: any
};
const Login : FC<loginProps> = (props) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');
    const { users } = useSelector((state: StateParam) => state.usersReducer);
    const dispatch = useDispatch();
    const LoginHandler = (e: any) => dispatch(login(e));

    const handleLogin = async () => {
        const user = users.filter((i: UserParam) => i.email === email);

        if (user.length === 0) {
            setErr('No Account Exists!');
            return;
        };
        if (user[0].password !== password) {
            setErr('Password is wrong!');
            return;
        }
        await AsyncStorage.setItem('userInfo', JSON.stringify({name: user[0].name, email}));
        LoginHandler({ email, password});
    };
    // useEffect(() => {
    //     setTimeout(() => {
    //         setErr('');
    //     }, 3000);
    // }, [err]);

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} />
            <Input placeholder='Password' secureTextEntry onChangeText={(text) => setPassword(text)} value={password} />
            <Text style={{ marginVertical: 2, color: 'red'}}>{err}</Text>
            <Button
                title='Log In'
                onPress={handleLogin}
            />

            <View style={styles.signupText}>
                <Text style={{marginHorizontal: 5}}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('signup')}
                >
                    <Text>Sign Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})