//Bibliotecas
import React,{useState,useEffect} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
//Importe de componentes e assets
import {css} from '../assets/AppCSS.js'

export default function Home(props){

    //Export do Componente
    return(
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={()=>props.navigation.navigate('Login')}>
                <Image source={require('../assets/img/buttonLogin.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={css.button__home} onPress={()=>props.navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/buttonRastrear.png')}/>
            </TouchableOpacity>

        </View>
    )
}