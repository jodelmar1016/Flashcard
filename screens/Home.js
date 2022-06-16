import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Button from '../components/Button'
import Sets from '../components/Sets'
import Data from '../components/Data'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = (props) => {

  return (
    <View style={styles.conatiner}>
      <View style={styles.top}>
        <View style={styles.boxTop}>
          <View>
            {/* <FontAwesome5 name="bars" size={30} color="#fff" /> */}
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Subject</Text>
            <TouchableOpacity style={styles.selection} onPress={props.moveToSubject}>
              <Text style={{fontSize:15}}>All</Text>
              <FontAwesome5 name="caret-down" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.boxBottom}>
          <View style={styles.sets}>
            {/* <FlatList
              data={Data}
              renderItem={ ({item}) => {
                <Sets handleClick={props.rev}
                        title={item.title}
                        card={item.card}/>
              }}
            /> */}
            {
              Data.map(item => {
                return(
                  <Sets handleClick={props.rev}
                        title={item.title}
                        card={item.card}/>
                )
              })
            }
          </View>
          <View style={styles.btnCreate}>
            <Button title='CREATE SET' handleClick={props.createSetClick} width={150} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner: {
      width: '100%',
      height: '100%',
      flex: 1
    },
    top: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#606060',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#333333',
    },
    boxTop: {
      flex: 1,
      width: '90%',
      justifyContent: 'space-between',
      paddingVertical: 15
    },
    selection: {
      backgroundColor: '#606060',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 3
    },

    bottom: {
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#333333',
    },
    boxBottom: {
      flex: 1,
      width: '90%',
      justifyContent: 'space-between',
      paddingBottom: 35
    },
    sets: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    btnCreate: {
      width: '100%',
      alignItems: 'center'
    }
})

export default Home