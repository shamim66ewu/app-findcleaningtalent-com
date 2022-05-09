//import { StatusBar } from 'expo-status-bar';
//import Checkbox from 'expo-checkbox';
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput,SafeAreaView,ScrollView, FlatList } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker'
// const mockData = [
//   { id: 1, name: "React Native Developer", checked: true }, // set default checked for render option item
//   { id: 2, name: "Android Developer" },
//   { id: 3, name: "iOS Developer" }
// ];

export default function LoginForm({navigation}) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value : 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);


    

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainSec}>
        <Text style={styles.wText}>My Profile</Text>

        <View style={styles.wrap}>
          <Image style={styles.avater} source={require('../assets/images/PlaceholderImg.png')} />
          <Text style={styles.uploadBtn}>Upload</Text>
          <Text style={styles.tTitle}>Ann Gonzales</Text>

          <View>
            <TextInput placeholder='Bio.......' style={[styles.formStyle,{height:150, width:'100%'}]} maxLength={180} multiline={true}/>
            <Text style={{textAlign:'right',fontSize:12}}>180</Text>
          </View>

          <View>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/pen.png')} style={{height:15, width:15, marginTop:2, marginRight:5}}/>
              <Text>First Name:</Text>
            </View>
            <TextInput placeholder='Ann' style={[styles.formStyle,{height:40, width:'100%'}]} maxLength={20}/>
          </View>

          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/pen.png')} style={{height:15, width:15, marginTop:2, marginRight:5}}/>
              <Text>Last Name:</Text>
            </View>
            <TextInput placeholder='Gonzales' style={[styles.formStyle,{height:40, width:'100%'}]} maxLength={20}/>
          </View>

          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/man.png')} style={{height:15, width:10, marginTop:3, marginRight:5}}/>
              <Text>Why Hire Me</Text>
            </View>
            <TextInput placeholder='7 years of experience' style={[styles.formStyle,{height:70, width:'100%'}]} multiline={true}/>
          </View>

          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/building.png')} style={{height:15, width:15, marginTop:3, marginRight:5}}/>
              <Text>The Type Of Company i'd Like to Work For</Text>
            </View>
            <TextInput placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
            style={[styles.formStyle,{height:100, width:'100%'}]} multiline={true}/>
          </View>

          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/boxstar.png')} style={{height:16, width:14, marginTop:3, marginRight:5}}/>
              <Text>I have previously worked at</Text>
            </View>
            <TextInput placeholder='A residential clening company' 
            style={[styles.formStyle,{height:70, width:'100%'}]} multiline={true}/>
          </View>

          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/world.png')} style={{height:15, width:15, marginTop:3, marginRight:5}}/>
              <Text>Select a Country</Text>
            </View>
            <TextInput placeholder='A residential clening company' 
            style={[styles.formStyle,{height:70, width:'100%'}]} multiline={true}/>
          </View>

          <View style= {styles.dContainer}>
            <Text style= {styles.paragraph}>
              React Native DropDown Picker
            </Text>
            <DropDownPicker
              open = {open}
              value = {value}
              items = {items}
              setOpen ={setOpen}
              setValue = {setValue}
              setItems = {setItems}
            />
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity activeOpacity={0.95}  
            style={[styles.button,{backgroundColor:"#00B2FF"}]} 
            onPress={() => navigation.navigate('MyProfile')}> 
              <Text style={styles.btnText}>Update Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.95}  
            style={[styles.button,{backgroundColor:"#1D568F"}]} 
            onPress={() => navigation.navigate('LoginFrom')}> 
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
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
   wrap:{
    backgroundColor: "#e5e5e5",
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:10
   },
    wText:{
    fontSize:22,
    marginVertical:20,
  },
  tTitle:{
    fontSize:18,
    marginVertical:10,
    color: '#1D568F'
  },
  avater:{
    height:75,
    width:75
  },
  uploadBtn:{
    fontSize:12,
    backgroundColor:'#00B2FF',
    textAlign:'center',
    paddingVertical:5,
    width:75,
    borderRadius:5,
    color:'#fff',
    marginTop:5
  },
  sFieldWrap:{
    flexDirection:'row',
    paddingTop:20
  },
  formStyle:{
    backgroundColor:"#fff",
    textAlignVertical: 'top',
    padding:10,
    marginTop:8,
    borderRadius:4,
  },
  dContainer:{
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnText: {
    fontSize: 14,
    color:'#fff',
  },
  button: {
    width:140,
    flexDirection: 'row', 
    height: 40, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation:0,
    borderRadius: 3,
  },
});