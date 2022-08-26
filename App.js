import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CSS} from './assets/CSS/Css.js'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {

  const [origin,setOrigin]=useState(null)

//Impreções
  return (
    <View style={CSS.container}>
      <MapView style={CSS.map}
              initialRegion={{
                latitude:-17.036416,
                longitude:-48.304703,
                latitudeDelta:0.000922,
                longitudeDelta:0.000421,
              }}
      >

      </MapView>
      <View style={CSS.search}>
        
      </View>
    </View>
  );
}


