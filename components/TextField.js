import React, {Component} from 'react';
import {View, StyleSheet, Text,TextInput, Image } from 'react-native';


class sTextField extends Component{
  render(props){
    var PropStyle = {
      height: parseInt(this.props.ImgHeight),
      width: parseInt(this.props. ImgWeight),
      marginRight: 7
    }
    //var ImageName= require('../assets/images/'+this.props.ImgName);

    //console.log(ImageName);
    
    var FHeight= {height: parseInt(this.props.FieldHeight)}
    return(
      <View>
        <View style={{flexDirection: 'row',marginTop:20}}>
          <Image style={PropStyle} source={require('../assets/images/pen.png')} />
          <Text>{this.props.Label}</Text>
        </View>
        <TextInput style={[styles.textArea,FHeight]} placeholder={this.props.PlaceholderN} multiline={true} maxLength={20}/>
      </View>
    )
  }
}


const styles = StyleSheet.create ({
  textArea:{
    width:'100%',
    backgroundColor:'#fff',
    padding:10,
    marginTop:10,
    },
});
export default sTextField;