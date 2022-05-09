//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto";

export default function HomePage({ navigation }) {
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
            <Image style={styles.HeroImage} source={require('../assets/images/Hero_1.jpg')}/>
          </View>
      
          <View style={styles.alignItem}>
            <Text style={styles.wText}>Welcome</Text>
            <Text style={styles.dText}>The Cleaning Network is an online talent sourcing platform specifically for the cleaning industrys</Text>
          </View> 
      
          <View style={styles.alignItem}>
            <TouchableOpacity activeOpacity={0.95} style={[styles.button,{backgroundColor:"#00B2FF"}]} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
      
            <TouchableOpacity activeOpacity={0.95} style={[styles.button,{backgroundColor:"#1D568F"}]} onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.text}>Registration</Text>
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
    HeroImage:{
      resizeMode:'contain',
      marginHorizontal:20,
      height:220,
      width:300
    },
    wText:{
      fontSize:22,
      fontFamily:'Roboto_500Medium',
      marginTop:10,
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
    text: {
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
      color:'#fff',
    }

});