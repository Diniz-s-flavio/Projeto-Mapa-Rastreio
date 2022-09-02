import { StyleSheet } from "react-native";

const css = StyleSheet.create({
//General styles
    container: {
      flex: 1,
      backgroundColor: '#fefefe',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white',
    },
    container2: {
      flex: 1,
      flexDirection:"row",
      backgroundColor: '#fefefe',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white',
    },
    textPage:{
      backgroundColor:'orange',
      padding:20,
    },
    button__home:{
      marginRight: 20,
    },
//Login Styles
    darkbg:{
      backgroundColor:'#333',
    },
    login__logoImg:{
      backgroundColor:"#efefef",
      borderRadius:5,
      marginBottom: 20
    },
    login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize:22,
      color:"red",
      marginTop:10,
      marginBottom:20,
      display: text
    }),
    login__form:{
      width:"80%",
    },
    login__input:{
      backgroundColor:'#fff',
      fontSize:19,
      padding: 7,
      marginBottom:15,
      borderRadius:3
    },
    login__button:{
      padding: 12,
      backgroundColor:"#45eae3",
      alignSelf:'center',
      borderRadius:5,
    },
    login__buttonText:{
      fontWeight:"bold",
      fontSize:22,
      color:"#333"
    }

  });
  
export {css};