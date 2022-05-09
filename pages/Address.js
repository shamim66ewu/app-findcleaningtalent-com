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
            <Image source={require('../assets/images/home-bg.png')} style={{height:30,width:30, marginRight:10}}/>
            <Text style={styles.Title}>Billing Address</Text>
          </View>
          
          <View style={{marginTop:20}}>
            <Text style={styles.inpotText}>First Name</Text>
            <TextInput style={styles.input} placeholder='Cleaning'/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Last Name</Text>
            <TextInput style={styles.input} placeholder='Network'/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Country: United States</Text>
            <Text style={styles.inpotText}>Street Address</Text>
            <TextInput style={styles.input} placeholder='House number and street name'/>
            <TextInput style={styles.input} placeholder='Apartment, suite, unit, etc.(optional)'/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>City / Town</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>State</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Zip Code</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={{marginTop:15}}>
            <Text style={styles.inpotText}>Phone</Text>
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
    }
   
})
