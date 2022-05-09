import React, {Component} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet, ScrollView} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import SidebarBTN from '../components/SidebarBTN';
import FooterNav from '../components/FooterNav'


function Message ({screenName}){

  const navigation = useNavigation();

  return(
    <View style={Msg.navSection}>
      <ScrollView>
        <View style={Msg.wrapper}>
          <SidebarBTN/>
          <Text style={Msg.Title}>All Messages</Text>
        </View>
        <View style ={Msg.Single}>
          <View style ={{width:'25%'}}>
            <Image source={require('../assets/images/cProfile.png')} style={{width:75, height:75}}/>
          </View>
          <View style={Msg.sTextSec}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={{fontSize:16, color:'#03030E', fontFamily:'Roboto_500Medium'}}>Crosby O'Dennehy</Text>
              <Text style={{fontSize: 12, color:'#9FA7AC'}}>20/11/12</Text>
            </View>
            <View>
              <Text style={Msg.sText}>Lorem Ipsum is simply dummy text of the printing and typescript industry.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterNav/>
    </View>
  )

}

export default Message;


const Msg = StyleSheet.create({
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
    Single:{
      backgroundColor:'#F1F1F1',
      flexDirection:'row',
      marginHorizontal:15,
      marginTop:0,
      marginBottom: 15,
      padding:15,
      borderRadius: 5,
      zIndex:-1
    },
    sTextSec:{
      flexDirection:'column',
      width:'75%'
    },
    sText:{
      fontSize:12,
      color: '#9FA7AC',
      marginTop: 10
    }
   
})
