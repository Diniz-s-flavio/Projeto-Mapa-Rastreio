import React from 'react';
import { View,Text } from 'react-native';

export default function Page(props){
    return(
        <View>
            <Text>{props.aoba}, {props.bao}.</Text>
        </View>
    )
}