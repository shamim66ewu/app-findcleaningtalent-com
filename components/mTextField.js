import React, {Component} from 'react';
import {View, StyleSheet, Text,TextInput } from 'react-native';


class mTextField extends Component{
    render(props){
        return(
            <View>
                <TextInput style={styles.textArea} multiline={true} maxLength={80}/>
            </View>
        )
    }
}


const styles = StyleSheet.create ({
    textArea:{
        height:60,
        width:'100%',
        backgroundColor:'#fff',
        padding:10,
        marginTop:10,
      },
});
export default mTextField;