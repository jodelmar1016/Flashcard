import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Button from '../components/Button'
import FontAwesome5 from '../node_modules/react-native-vector-icons/FontAwesome5'

const CreateSet = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Pressable
                style={styles.btn}
                onPress={props.moveToHome}
            >
                <FontAwesome5 name='times' size={30} />
            </Pressable>
            <Pressable
                style={styles.btn}
                onPress={() => alert("CREATE SET")}
            >
                <FontAwesome5 name='check' size={30} />
            </Pressable>
        </View>
        <View style={styles.content}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>TITLE</Text>
            <TextInput
                style={styles.input}
                value="Mobile Computing"
            />
            <TouchableOpacity
                onPress={props.moveToSubjects}
                style={styles.select}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Subject</Text>
                    <Text style={{fontSize: 16, color: '#fff'}}>None</Text>
                </View>
                <View>
                    <FontAwesome5 name="caret-down" size={45} />
                </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center',width: '100%', marginVertical: 30}}>
                <Button handleClick={props.moveToAddCards} title='ADD CARDS' width={150}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '90%',
        backgroundColor: '#000'
    },
    top: {
        height: '10%',
        backgroundColor: '#A2A2A2',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: '#606060',
        height: "90%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 25,
        paddingTop: 100
    },
    input: {
        borderWidth: 1,
        borderColor: '#3AB3C1',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        width: '100%'
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#A2A2A2',
        marginVertical: 15,
    },
    btn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CreateSet