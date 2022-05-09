import React, {Component} from 'react';
import {View, StyleSheet, Text,TextInput } from 'react-native';


class TextArea extends Component{
  render(props){
    return(
      <View>
        <TextInput style={styles.textArea} editable placeholder="Bio..." multiline={true} numberOfLines={4} maxLength={180}/>
        <Text style={{textAlign:'right', marginTop:3}} >{20}</Text>
      </View>
    )
  }
}
export default TextArea;

const styles =StyleSheet.create ({
    textArea:{
        height: 40,
        width:'100%',
        backgroundColor:'#fff',
        padding:10,
        marginTop:10,
      },
});
