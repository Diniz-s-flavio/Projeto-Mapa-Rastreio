import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CSS} from './assets/CSS/Css.js'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from'./config/index.json';

export default function App() {

  const [origin,setOrigin]=useState(null);
  const [destination,setDestination]=useState(null);

 useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setOrigin({latitude:location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta:0.00922,
          longitudeDelta:0.00421})
      }else{
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);
  
//Google Places Autocomplete
const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Para onde vamos?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: config.googleApi,
        language: 'pt-br',
      }}
      enablePoweredByContainer={false}
      fetchDetails={true}
      styles={{listView:{
        height:20,
        position: "absolute",
        top: 40,
        borderColor: "gray",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4}}}
    />
  );
};

//Impreções
  return (
    <View style={CSS.container}>
      <MapView style={CSS.map}
              initialRegion={origin}
              showsUserLocation={true}
              zoomEnabled={true}
              loadingEnabled={true}
      >

      </MapView>
      <View style={CSS.search}>
      <GooglePlacesInput/>
      </View>
    </View>
  );
}