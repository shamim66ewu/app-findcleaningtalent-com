//import { StatusBar } from 'expo-status-bar';
//import Checkbox from 'expo-checkbox';
//import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto";


export default function LoginPage() {
    let [fontsLoaded, error] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
      });
    
      if(!fontsLoaded){
        return <AppLoading/>;
      }
      

      return(
        <View style={styles.container}>
      
          <View style={styles.alignItem}>
            <Image style={styles.LogoImage} source={require('../assets/images/cleaningnetwork.png')}/>
            <Image style={styles.LogoImage2} source={require('../assets/images/star.png')}/>
          </View>
      
          <View style={styles.alignItem}>
            <Text style={styles.wText}>Help Your Profile Stand Out</Text>
            <Text style={styles.dText}>Login Created Successfully</Text>

          </View>
          
          <View style={styles.divider}></View>

          <View style={styles.alignItem}> 
            <TouchableOpacity activeOpacity={0.95} style={[styles.button,{backgroundColor:"#00B2FF"}]}>
              <Text style={styles.text}>Get featured ~ $10/mo</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.95} style={styles.button2}>
              <Text style={[styles.text,{color:"#00B2FF"}]}>No, thank. I don't want to be featured.</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff'
    },
    alignItem:{
      alignItems:'center'
    },
    LogoImage:{
      height: 120,
      width: 120
    },
    LogoImage2:{
      height: 50,
      width: 50,
      marginTop:50
    },
    wText:{
      fontSize:22,
      fontFamily:'Roboto_500Medium',
      marginTop:30,
    },
    dText:{
      fontSize:15,
      fontFamily:'Roboto_400Regular',
      textAlign:'center',
      color:'#9FA7AC',
      lineHeight:24,
      marginTop:10,
      marginHorizontal:'5%'

    },
    button: {
      width:300,
      flexDirection: 'row', 
      height: 45, 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      elevation:0,
      borderRadius: 50,
    },
    button2: {
      width:300,
      flexDirection: 'row', 
      height: 45, 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      elevation:0,
      borderRadius: 50,
      borderColor: '#e5e5e5',
      borderWidth:1
    },
    text: {
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
      color:'#fff',
    },
    button1:{
      borderColor: '#E5E5E5',
    },
    divider:{
      width:200,
      height:2,
      backgroundColor:"#e5e5e5",
      marginTop:20,
      borderRadius:5
    }
});