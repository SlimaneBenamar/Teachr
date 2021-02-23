import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function RetirerButton({text, onPress}){
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styless.button}>
        <Text style={styless.buttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}
const styless = StyleSheet.create({
  button:{
    justifyContent: 'space-around',
    borderRadius:8,
    height:40,
    backgroundColor:'white',
    textAlign:'center',
    borderColor:'#f08080',
    borderWidth:1,
    marginTop:10,
  },
  buttonText:{
    color:'#f08080',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
  }
})
