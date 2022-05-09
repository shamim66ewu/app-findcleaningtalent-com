//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import FooterNav from '../components/FooterNav'
import SidebarBTN from '../components/SidebarBTN';


export default function MyProfile({ navigation }) {
    
  return(
    <SafeAreaView style={styles.container}>
     
    <ScrollView style={styles.mainSec}>
      <SidebarBTN /> 
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={styles.title}>My Profile</Text> 
        <Text style={styles.completion}>Profile Completion: 100%</Text>
      </View>

      <View style={styles.wrap}>
        <View style={{flexDirection:'row', maxWidth: '85%'}}>
          <Image style={styles.avater} source={require('../assets/images/PlaceholderImg.png')} />
          <View style={{marginHorizontal:10, width:'85%' }}>
            <Text style={styles.name}>Ann Gonzales</Text>
            <Text style={styles.bio}>I have 7 years of experience in the cleaning industry in both residential cleaning and commercial cleaning</Text>
          </View>
        </View>

        <View style={styles.formInfo}>
          <View style={styles.fleX}>
          <Image source={require('../assets/images/location.png')} style={{height:17, width:12, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>Stika, Alasks</Text>
          </View>
          
          <View style={styles.fleX}>
          <Image source={require('../assets/images/building.png')} style={{height:16, width:16, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>Senior Level Experience</Text>
          </View>

          <View style={styles.fleX}>
          <Image source={require('../assets/images/man2.png')} style={{height:12, width:17, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>English, Spanish</Text>
          </View>

          <View style={styles.fleX}>
          <Image source={require('../assets/images/squire.png')} style={{height:13, width:16, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>$10-20 +/hr</Text>
          </View>

          <View style={styles.fleX}>
          <Image source={require('../assets/images/clock.png')} style={{height:15, width:16, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>Full-Time, Temporary</Text>
          </View>

          <View style={styles.fleX}>
          <Image source={require('../assets/images/building.png')} style={{height:16, width:16, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>Commercial</Text>
          </View>

          <View style={styles.fleX}>
          <Image source={require('../assets/images/car.png')} style={{height:16, width:16, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>Willing to travel 10-20 miles</Text>
          </View>

          <View style={styles.fleX}>
          <Image source={require('../assets/images/list.png')} style={{height:16, width:16, marginTop:3, marginRight:8}}/>
          <Text style={styles.formTxt}>Supervisor</Text>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.hText}>Why Hire Me?</Text>
          <View style= {styles.fleX}>
            <Image source={require('../assets/images/Ellipse.png')} style={{height:5, width:5, marginRight:5}}/>
            <Text style={styles.formTxt}>7 years of experience</Text>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.hText}>The type of company i’d like to work for</Text>
          <View style= {styles.fleX}>
            <Image source={require('../assets/images/Ellipse.png')} style={{height:5, width:5, marginRight:5}}/>
            <Text style={[styles.formTxt,{maxWidth:'95%'}]}>Dependable cleaning company with lots of room to grow one day i would like start a cleaning company so i am willing to leam.</Text>
          </View>
        </View>
      </View>

    </ScrollView>
      <FooterNav/>
    </SafeAreaView> 

    )
}


const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#fff'
  },
   mainSec:{
    margin: 15,
   },
   avater:{
    height:75,
    width:75
  },
   title:{
     fontSize:20,
     fontFamily:'Roboto_500Medium',
   },
   completion:{
     fontSize: 14,
     fontFamily:'Roboto_500Medium',
   },
   wrap:{
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 10,
    paddingVertical:20,
    borderRadius:16,
    marginTop: 30,
   },
   name:{
     fontSize: 18,
     fontFamily: 'Roboto_500Medium'
   },
   bio:{
     color:'#9FA7AC',
     marginTop: 3,
     lineHeight:18,
     fontSize: 13

   },
   fleX:{
     flexDirection:'row',
     marginTop: 15,
     alignItems: 'center'

   },
   formInfo:{
     marginTop:10,
     marginLeft:20,
   },
   formTxt:{
    color:'#9FA7AC',
    fontSize: 13
   },
   hText:{
     fontSize: 16,
     fontFamily: 'Roboto_500Medium',
   }

   
   
});