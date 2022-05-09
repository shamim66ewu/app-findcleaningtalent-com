import Checkbox from 'expo-checkbox';
import React, {Component, useState} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet, ScrollView, TextInput, ImageBackground, Button} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import SidebarBTN from '../components/SidebarBTN';
import FooterNav from '../components/FooterNav'




function Notification ({screenName}){

  const [isChecked_1, setChecked_1] = useState(false);
  const [isChecked_2, setChecked_2] = useState(false);

  const navigation = useNavigation();

  return(
    <View style={styles.navSection}>
      <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode='cover' style={{flex:1}}>
      <ScrollView>
        <View style={styles.wrapper}>
          <SidebarBTN/>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../assets/images/bell.png')} style={{height:25,width:25, marginRight:10}}/>
            <Text style={styles.Title}>Notifications</Text>
          </View>
          
          <View style={{marginTop:20}}>
            <Text style={{fontSize:12, color:'#9FA7AC'}}>Select what notifications you want to receive</Text>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Messages</Text>
          </View>

          <View style={{marginTop:15, flexDirection: 'row'}}>
            <Checkbox value={isChecked_1} onValueChange={setChecked_1} color={isChecked_1 ? '#00B2FF' : undefined} />
            <Text style={styles.checkBoxTxt}>Someone sends me a private message</Text>
          </View>

          <View style={{marginTop:15, flexDirection: 'row'}}>
            <Checkbox value={isChecked_2} onValueChange={setChecked_2} color={isChecked_2 ? '#00B2FF' : undefined} />
            <Text style={styles.checkBoxTxt}>I have an unread message</Text>
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
    },
    btn:{
      paddingHorizontal: 25,
      paddingVertical: 13,
      backgroundColor: '#00B2FF',
      color: '#fff',
      borderRadius: 3
    },
   checkBoxTxt:{
     color: '#9FA7AC',
     fontSize: 12,
     marginLeft:8
   }
})
