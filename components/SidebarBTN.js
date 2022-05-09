import React, {Component, useState} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';


function SidebarBTN ({screenName}){
    const [shouldShow, setShouldShow] = useState(false);
    const navigation = useNavigation();
  return(
    <View style={{marginBottom:20, position:"relative",zIndex:9999999999999}}>

      <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{width:50}}>
        <Image source={require("../assets/images/navIcon.png")} style={{width:30,height:20}}/>
      </TouchableOpacity>

      {
      shouldShow ? (
        <View style={NavStyle.NaviWrapeer}>
          <TouchableOpacity style={NavStyle.NavSingle} onPress={() => navigation.navigate('Profile')}>
            <Image source={require("../assets/images/avater.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={NavStyle.NavSingle} onPress={() => navigation.navigate('Password')}>
            <Image source={require("../assets/images/pass.png")} style={{width:20, height:10}}/>
            <Text style={NavStyle.NavSingleTXT}>Change Password</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={NavStyle.NavSingle} onPress={() => navigation.navigate('Address')}>
            <Image source={require("../assets/images/home.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Billing Address</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={NavStyle.NavSingle}>
            <Image source={require("../assets/images/subs.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Subscriptions</Text>
          </TouchableOpacity>

          <View style={NavStyle.NavSingle}>
            <Image source={require("../assets/images/down.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Downloads</Text>
          </View>
          <View style={NavStyle.NavSingle}>
            <Image source={require("../assets/images/money.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Payment Method</Text>
          </View>
          <TouchableOpacity style={NavStyle.NavSingle} onPress={() => navigation.navigate('Privacy')}>
            <Image source={require("../assets/images/key.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={NavStyle.NavSingle} onPress={() => navigation.navigate('Notifications')}>
            <Image source={require("../assets/images/alert-not.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Notifications</Text>
          </TouchableOpacity>

          <View style={NavStyle.NavSingle}>
            <Image source={require("../assets/images/web-mail.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Web Notifications</Text>
          </View>
          <View style={NavStyle.NavSingle}>
            <Image source={require("../assets/images/deldte.png")} style={{width:20, height:20}}/>
            <Text style={NavStyle.NavSingleTXT}>Delete Account</Text>
          </View>
        </View>
      ):null
      }
    </View>
  )

}

export default SidebarBTN;


const NavStyle = StyleSheet.create({
  NaviWrapeer:{
    backgroundColor: '#1D568F',
    position: "absolute",
    top: 35,
    width:'100%',
  },
  NavSingle:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: "#2C6EB0",
    borderBottomWidth: 1
  },
  NavSingleTXT:{
    marginLeft: 8,
    fontSize: 12,
    color: '#fff'
  },
  Btn:{
    width:30,
    height:5,
    backgroundColor: '#1D568F'
  }
})
