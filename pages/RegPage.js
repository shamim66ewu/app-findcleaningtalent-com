//import { StatusBar } from 'expo-status-bar';
//import Checkbox from 'expo-checkbox';
//import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto";


export default function LoginPage({navigation}) {
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
          </View>
      
          <View style={styles.alignItem}>
            <Text style={styles.wText}>Welcome Back</Text>
            <Text style={styles.dText}>Login with your username or email</Text>

            <View>
                <Text style={styles.input_txt}>Username or Email</Text>
                <TextInput style={styles.input}/>
            </View>

            <View>
                <Text style={styles.input_txt}>Password</Text>
                <TextInput style={styles.input}/>
            </View>

            <View>
                <Text style={styles.input_txt}>Confirm Password</Text>
                <TextInput style={styles.input}/>
            </View>
          </View>
          

          <View style={[styles.alignItem,{paddingTop:20}]}>
            
            <TouchableOpacity activeOpacity={0.95} 
            style={[styles.button,{backgroundColor:"#1D568F"}]} onPress={()=> navigation.navigate('Submission')}>
              <Text style={styles.text}>Registration</Text>
            </TouchableOpacity>

            <View style={styles.SiText}>
              <Text>Already have an account? </Text>
              <Text style={{color:'#1D568F'}}>Log in</Text>
            </View>
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
    wText:{
      fontSize:22,
      fontFamily:'Roboto_500Medium',
      marginTop:20,
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
    },
    input_txt:{
      paddingTop: 20,
      fontSize:15
    },
    input:{
      height: 45,
      width: 300,
      borderWidth: 1,
      borderColor:"#D5D5D5",
      borderRadius:5,
      marginTop:5,
      paddingLeft:15
    },
    checkbox: {
      marginRight: 5,
    },
    SiText:{
      flexDirection:'row',
      paddingTop:15
    }
});