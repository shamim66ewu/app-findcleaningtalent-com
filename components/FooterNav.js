import React, {Component} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';



function FooterNav (){

  const navigation = useNavigation();

  return(
    <View style={NavStyle.navSection}>

      <TouchableOpacity style={NavStyle.navRow} onPress={() => navigation.navigate('Candidates')}> 
        <Image source={require('../assets/images/profile.png')} style={NavStyle.navBtn}/>
      </TouchableOpacity>

      <TouchableOpacity style={NavStyle.navRow} onPress={() => navigation.navigate('Messages')}>
        <Image source={require('../assets/images/email.png')} style={NavStyle.navBtn}/>
      </TouchableOpacity>

      <TouchableOpacity style={NavStyle.navRow} onPress={()=> navigation.navigate('Notification')}>
      <Image source={require('../assets/images/alert.png')} style={NavStyle.navBtn}/>
      </TouchableOpacity>

      <TouchableOpacity style={[NavStyle.navRow,{borderRightWidth:0}]}>
      <Image source={require('../assets/images/people.png')} style={NavStyle.navBtn}/>
      </TouchableOpacity>

    </View>
  )

}

export default FooterNav;


const NavStyle = StyleSheet.create({
  navSection:{
    flexDirection: 'row',
    width:'100%',
    marginBottom: 15
    },
   navRow:{
    width:'25%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRightColor: "#e3e3e3",
    borderRightWidth:1
   },
   navBtn:{
     height:25,
     width: 25
   }
})
