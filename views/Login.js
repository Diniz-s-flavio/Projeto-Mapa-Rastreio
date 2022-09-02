//Bibliotecas
import React,{useState,useEffect} from 'react';
import {Platform, Image,TextInput, TouchableOpacity, KeyboardAvoidingView,Text, View} from 'react-native';
//Importe de componentes e assets
import {css} from '../assets/AppCSS.js'

export default function Login(){

    const [display, setDisplay]=useState('none');

    return(
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container,css.darkbg]}>
            {/**Logo */}
            <View>
                <Image style={css.login__logoImg} source={require('../assets/img/eyeLogo_128x.png')}/>
            </View>
            {/**Mensagem de erro */}
            <View>
                <Text style={css.login__msg()}>Usuário ou senha invalidos!!</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuario:'/>
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button} onPress={()=>setDisplay('flex')}>
                    <Text tyle={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
    )
}