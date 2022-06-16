import React from 'react'
import {View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import Button from './Button';

const Subjects = (props) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.container}>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.sub}</Text>
            </View>
            <View>
                
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#A2A2A2',
    marginVertical: 5
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderLeftWidth: 5,
    borderLeftColor: '#3AB3C1',
    backgroundColor: '#A2A2A2',
    paddingHorizontal: 10,
  },
  
});

export default Subjects