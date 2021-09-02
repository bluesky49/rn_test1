import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text } from "react-native-elements";

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    value: string;
}

const CustomizedInput : FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Input
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    );
};

export default CustomizedInput;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})
