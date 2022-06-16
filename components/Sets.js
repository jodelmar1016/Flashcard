import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import Button from './Button';

const Sets = (props) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerText}>
                <Text style={{fontSize: 20}}>{props.title}</Text>
                <Text style={{fontSize: 16, color: '#C9C9C9'}}>{props.card}</Text>
            </View>
            <View style={styles.containerButton}>
                <Button handleClick={props.handleClick} title="Review" width={100} height='auto' />
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    backgroundColor: '#333333',
    marginVertical: 10
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    borderLeftWidth: 5,
    borderLeftColor: '#3AB3C1',
    backgroundColor: '#606060'
  },
  
});

export default Sets