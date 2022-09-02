//Bibliotecas
import React,{useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Importe de componentes e assets
import {Home,Login,Rastreio} from './views'

export default function App() {

 //React Navigation
 const Stack = createNativeStackNavigator();

 //Impreções
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{ title:"Astral Future Logistica", headerStyle:{backgroundColor:"#45eae3",},
        headerTintColor:'#333', headerTitleStyle: { fontWeight: 'bold', alignSelf:'center' },
        }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false}}/>
        <Stack.Screen name="Rastreio" component={Rastreio} options={{ title:"Rastrear", headerStyle:{backgroundColor:"#45eae3",},
          headerTintColor:'#333', headerTitleStyle: { fontWeight: 'bold', alignSelf:'center' },
        }}/>
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}

      </Stack.Navigator>
    </NavigationContainer>
  );
}


