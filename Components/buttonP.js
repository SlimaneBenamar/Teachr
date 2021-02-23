import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function PrendreButton({text, onPress}){
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.btnText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button:{
    justifyContent: 'space-around',
    borderRadius:8,
    height:40,
    backgroundColor:'#00bfff',
    textAlign:'center',
    alignItems:'center',
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
    alignItems:'center',
  }
})
