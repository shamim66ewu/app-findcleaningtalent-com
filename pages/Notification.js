import React, {Component} from  'react';
import {Text, View, TouchableOpacity, Image,StyleSheet, ScrollView} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import SidebarBTN from '../components/SidebarBTN';
import FooterNav from '../components/FooterNav'

function Notification ({screenName}){

  const navigation = useNavigation();

  return(
    <View style={Msg.navSection}>
      <ScrollView>
        <View style={Msg.wrapper}>
          <SidebarBTN/>
          <Text style={Msg.Title}>My Notifications</Text>
        </View>

        <View style ={Msg.Single}>
					<Text style={Msg.close}>x</Text>
					<View>
						<Text style={Msg.singleTxt}>A Cleaning Company Was Viewed your profile </Text>
						<Text style={[Msg.singleTxt,{marginTop:7}]}>1 month ago</Text>
					</View>
        </View>

				<View style ={Msg.Single}>
				<Text style={Msg.close}>x</Text>
					<View>
						<Text style={Msg.singleTxt}>A Cleaning Company Was Viewed your profile </Text>
						<Text style={[Msg.singleTxt,{marginTop:7}]}>1 month ago</Text>
					</View>
        </View>
      </ScrollView>
      <FooterNav/>
    </View>
  )

}

export default Notification;


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
      backgroundColor:'#1D568F',
      flexDirection:'row',
      marginHorizontal:15,
      marginTop:0,
      marginBottom:15,
      padding:15,
      borderRadius: 5,
      zIndex:-1,
			position:'relative'
    },
		singleTxt:{
			fontSize:14,
			color:'#fff'
		},
		close:{
			position: 'absolute',
			right: 10,
			color: '#fff',
			top: 0,
			fontSize: 18
		}
   
})
