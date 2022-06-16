import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EditList = (props) => {
  return (
    <View style={styles.mainContainer}>
        <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
            <Text style={{fontSize:25, fontWeight: 'bold'}}>{props.term}</Text>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>edit</Text>
        </View>
        <Text style={{fontSize:15}}>{props.definition}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    backgroundColor: '#333333',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#3AB3C1',
    padding: 15
  },

});

export default EditList