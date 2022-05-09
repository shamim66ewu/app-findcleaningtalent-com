import React from 'react';
import {StyleSheet, Text, View,ScrollView, SafeAreaView, Button,Image} from 'react-native';
import FooterNav from '../components/FooterNav';
import SidebarBTN from '../components/SidebarBTN';


export default function Candidates({navigation}){
  return(
    <SafeAreaView style = {styles.container}>
      <View style={{marginHorizontal:15, marginTop:15}}>
        <SidebarBTN />
      </View>
      <ScrollView style ={styles.wrap}>
      <View style= {styles.TopSec}>
        <View>
          <Text style= {styles.hText}>All Candidates</Text>
        </View>
        <View style={styles.TopSecBtn}>
          <Text style={{color:"#fff"}}>Filter Result</Text>
        </View>
      </View>

      <View style={styles.sWrapper}>
        <View style={{width:'27%'}}>
          <Image source={require('../assets/images/cProfile.png')} style={{height:75, width:75}}/>

          <View style={styles.featuedWrapper}>
            <Image source={require('../assets/images/fetured.png')} style={{height:12, width:12, marginRight:3}}/>
            <Text style={{color:"#00B2FF", fontSize:10}}>Featured</Text>
          </View> 
        </View>
        <View style={{marginLeft:10, width:'70%'}}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.FeatuTitle}>Jocelin Marlow</Text>
            <Image source={require('../assets/images/featuredmail.png')} style={{height:12, width:15}}/>
          </View>
          <Text style={styles.fBio}>Exprienced Cleacer, Seeking to work in Hospitality</Text>

          <View style={{flexDirection:'row', alignItems:'center', marginTop: 8}}>
            <Image source={require('../assets/images/location.png')} style={{height:13, width:9, marginRight:3}}/>
            <Text style={{fontSize:12, color: '#00B2FF'}}>Stika, Alaska</Text>
          </View>
          <View style={{flexDirection:'row', marginTop: 8, alignItems: 'center'}}>
            <Image source={require('../assets/images/building.png')} style={{height:13, width:12, marginRight:3}}/>
            <Text style={{fontSize:12, color: '#737373'}}>Mid-Level Experience $10-20/hr</Text>
          </View>
        </View>  
      </View>

      <View style={styles.sWrapper}>
        <View style={{width:'27%'}}>
          <Image source={require('../assets/images/cProfile.png')} style={{height:75, width:75}}/>

          <View style={styles.featuedWrapper}>
            <Image source={require('../assets/images/fetured.png')} style={{height:12, width:12, marginRight:3}}/>
            <Text style={{color:"#00B2FF", fontSize:10}}>Featured</Text>
          </View> 
        </View>
        <View style={{marginLeft:10, width:'70%'}}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.FeatuTitle}>Jocelin Marlow</Text>
            <Image source={require('../assets/images/featuredmail.png')} style={{height:12, width:15}}/>
          </View>
          <Text style={styles.fBio}>Exprienced Cleacer, Seeking to work in Hospitality</Text>

          <View style={{flexDirection:'row', alignItems:'center', marginTop: 8}}>
            <Image source={require('../assets/images/location.png')} style={{height:13, width:9, marginRight:3}}/>
            <Text style={{fontSize:12, color: '#00B2FF'}}>Stika, Alaska</Text>
          </View>
          <View style={{flexDirection:'row', marginTop: 8, alignItems: 'center'}}>
            <Image source={require('../assets/images/building.png')} style={{height:13, width:12, marginRight:3}}/>
            <Text style={{fontSize:12, color: '#737373'}}>Mid-Level Experience $10-20/hr</Text>
          </View>
        </View>  
      </View>

      </ScrollView>
      <FooterNav screenName="Candidates"/>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#fff'
  },
  wrap:{
    margin:15,
  },
  TopSec:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom:20,
    alignItems:'center',
  },
  TopSecBtn: {
    backgroundColor: '#00B2FF',
    paddingHorizontal:24,
    paddingVertical:13,
    borderRadius:25,
  },
  TopSecBtnInner: {
    fontSize:12, 
  },
  hText: {
    fontSize:20,
    fontFamily:'Roboto_500Medium',
  },
  sWrapper: {
    backgroundColor: '#F1F1F1',
    padding:15,
    borderRadius:16,
    flexDirection:'row',
    marginBottom:15,
  },
  featuedWrapper:{
    flexDirection: 'row',
    marginTop:10,
    alignItems:'center'
  },
  FeatuTitle:{
    fontSize: 16,
    fontFamily:'Roboto_500Medium'
  },
  fBio:{
    fontSize: 12,
    color:'#9FA7AC',
    marginTop:8,
  }
})