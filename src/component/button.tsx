import React, { FC } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

interface Props {
    title: string;
    onPress: () => void;
    style?: object;
};

const CustomizedButton : FC<Props> = (props) => {
    return (
        <View>
            <Button
                title={props.title}
                onPress={props.onPress}
                containerStyle={props.style}                
            />
        </View>
    );
};
export default CustomizedButton;
