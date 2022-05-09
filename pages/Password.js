import React, {Component} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet, ScrollView, TextInput, ImageBackground, Button} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import SidebarBTN from '../components/SidebarBTN';
import FooterNav from '../components/FooterNav'

function Notification ({screenName}){

  const navigation = useNavigation();

  return(
    <View style={styles.navSection}>
      <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode='cover' style={{flex:1}}>
      <ScrollView>
        <View style={styles.wrapper}>
          <SidebarBTN/>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../assets/images/pass-lg.png')} style={{height:10,width:45, marginRight:10}}/>
            <Text style={styles.Title}>Change Password</Text>
          </View>
          
          <View style={{marginTop:20}}>
            <Text style={styles.inpotText}>Current Password</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>New Password</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Confirm Password</Text>
            <TextInput style={styles.input}/>
          </View>

          <TouchableOpacity style={{width:'max-content', marginTop:20}}>
            <Text style={styles.btn}>Update Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
      <FooterNav/>
    </View>
  )

}

export default Notification;


const styles = StyleSheet.create({
  navSection:{
    flexDirection: 'column',
    width:'100%',
    flex: 1,
    backgroundColor:'#fff'
    },
    wrapper:{
      margin:15
    },
    Title:{
      fontSize: 20,
      fontFamily:'Roboto_500Medium'
    },
    inpotText:{
      fontSize: 15,
    },
    input:{
      height:40,
      padding:10,
      marginTop:8,
      borderRadius:5,
      borderWidth: 1,
      borderColor: '#D4D4D4',
    },
    btn:{
      paddingHorizontal: 25,
      paddingVertical: 13,
      backgroundColor: '#00B2FF',
      color: '#fff',
      borderRadius: 3
    }
   
})
