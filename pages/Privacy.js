import Checkbox from 'expo-checkbox';
import React, {Component, useState} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet, ScrollView, TextInput, ImageBackground, Button} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import SidebarBTN from '../components/SidebarBTN';
import FooterNav from '../components/FooterNav'

function Notification ({screenName}){

  const [isAvoid, setAvoid] = useState(false);
  const [isShow, setShow] = useState(false);

  const navigation = useNavigation();

  return(
    <View style={styles.navSection}>
      <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode='cover' style={{flex:1}}>
      <ScrollView>
        <View style={styles.wrapper}>
          <SidebarBTN/>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../assets/images/lock.png')} style={{height:25,width:20, marginRight:10}}/>
            <Text style={styles.Title}>Privacy</Text>
          </View>
          
          <View style={{marginTop:20}}>
            <Text style={styles.inpotText}>Profile Privacy</Text>
            <TextInput style={styles.input} placeholder='Everyone'/>
          </View>

          <View style={{marginTop:20}}>
          <Text style={styles.inpotText}>Avoid indexing my profile by search engines</Text>
          <View style={{flexDirection:'row', marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Checkbox value={isAvoid} onValueChange= {setAvoid} color={isAvoid ? '#1D568F' : undefined}/>
              {isAvoid ? <Text style={styles.checkTxt}>Yes</Text> : <Text style={styles.checkTxt}>No</Text>}
            </View> 
          </View>
          </View>

          <View style={{marginTop:20}}>
          <Text style={styles.inpotText}>Show my online status?</Text>
          <View style={{flexDirection:'row', marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Checkbox value={isShow} onValueChange= {setShow} color={isShow ? '#1D568F' : undefined}/>
              {isShow ? <Text style={styles.checkTxt}>Yes</Text> : <Text style={styles.checkTxt}>No</Text>}
            </View> 
          </View>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Who can Send Me Private Messages?</Text>
            <TextInput style={styles.input} placeholder='Everyone'/>
          </View>

          <View style={{marginTop:20}}>
            <Text style={styles.inpotText}>Download Your Data</Text>
            <Text style={{fontSize:12, color:'#9FA7AC',marginTop: 10}}>Enter your current password to confirm a new export of your personal data</Text>
            <TextInput style={styles.input} placeholder='Password'/>

              <TouchableOpacity style={{width:'max-content', marginTop:20, marginLeft: 'auto'}}>
                <Text style={styles.btn}>Request Data</Text>
              </TouchableOpacity>
          </View>

          <View style={{marginTop:20, marginBottom:30}}>
            <Text style={styles.inpotText}>Download Your Data</Text>
            <Text style={{fontSize:12, color:'#9FA7AC', marginTop: 10}}>Enter your current password to confirm a new export of your personal data</Text>
            <TextInput style={styles.input} placeholder='Password'/>

              <TouchableOpacity style={{width:'max-content', marginTop:20, marginLeft: 'auto'}}>
                <Text style={styles.btn}>Request Data Erase</Text>
              </TouchableOpacity>
          </View>
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
      borderWidth: 1,
      borderColor: '#D4D4D4',
      borderRadius:5
    },
    btn:{
      paddingHorizontal: 25,
      paddingVertical: 13,
      backgroundColor: '#00B2FF',
      color: '#fff',
      borderRadius: 3
    },
    checkTxt:{
      color:'#9FA7AC',
      fontSize:12,
      marginLeft:5
    }
   
})
