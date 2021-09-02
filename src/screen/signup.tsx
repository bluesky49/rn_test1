import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button } from '../component';
import { signup } from '../redux/actions';
import { UserParam, StateParam } from '../model/user';

interface signupProps {
    navigation: any;
}

const Signup : FC<signupProps> = (props) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPwd ] = useState('');
    const [ err, setErr ] = useState('');
    const dispatch = useDispatch();
    const { users } = useSelector((state: StateParam) => state.usersReducer);
    const signHandler = (e: any) => dispatch(signup(e));
    const handleSignup = async () => {
        const emails = users.map((i: UserParam) => i.email);
        if (emails.includes(email)) {
            setErr('Already Registered!');
            return;
        };
        await AsyncStorage.setItem('userInfo', JSON.stringify({name, email}));
        signHandler({name, email, password});
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setErr('');
    //     }, 3000);
    // }, [err]);

    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            <Input
                placeholder='Name'
                onChangeText={(text) => setName(text)} value={name}
            />
            <Text style={{ marginVertical: 2, color: 'red'}}>{err}</Text>
            <Input
                placeholder='Email'
                onChangeText={(text) => setEmail(text)} value={email}
            />
            <Input
                placeholder='Password'
                secureTextEntry
                onChangeText={(text) => setPwd(text)} value={password}
            />
            <Button title="Sign Up" onPress={handleSignup} />
            <View style={styles.loginText}>
                <Text>Already Have an Account?</Text>
                <TouchableOpacity
                    style={{ marginHorizontal: 5}}
                    onPress={() => props.navigation.navigate('login')}
                >
                    <Text>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})