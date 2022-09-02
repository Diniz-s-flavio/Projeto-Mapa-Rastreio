//Bibliotecas
import React,{useState,useEffect} from 'react';
import { Text, View, Button} from 'react-native';
//Importe de componentes e assets
import {css} from '../assets/AppCSS.js'

export default function Rastreio({navigation}){

    //Export do Componente
    return(
        <View>
            <Text>Esse é o componente Home</Text>
            <Button title='Realizar Login' onPress={()=>navigation.navigate('Login')}/>
        </View>
    )
}