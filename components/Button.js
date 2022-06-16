import React from 'react'
import {Text, StyleSheet,TouchableOpacity } from 'react-native';
import FontAwesome5 from '../node_modules/react-native-vector-icons/FontAwesome5';

const Button = (props) => {
  return (
    <TouchableOpacity 
        onPress={props.handleClick} 
        style={[styles.appButtonContainer, {width: props.width, height: props.height}]}>
        <FontAwesome5 name={props.ic} size={props.icSize} />
        <Text style={styles.appButtonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#3AB3C1',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row' 
  },
  appButtonText: {
    fontFamily: 'sans-serif',
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  
});

export default Button