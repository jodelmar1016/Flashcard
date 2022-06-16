import React, { useState } from 'react'
import {View, Text, StyleSheet, Pressable, Modal, TextInput} from 'react-native'
import Button from '../components/Button'
import Subjects from '../components/Subjects'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Subject = (props) => {
  const [addSubject, setAddSubject] = useState(false)
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Pressable
                style={{width: 50, height: 50, justifyContent: 'center'}}
                onPress={props.moveToHome}>
                <FontAwesome5 name="times" size={30} />
            </Pressable>
        </View>
        <View style={styles.content}>
            <View style={styles.subjects}>
                <Subjects sub='All' />
                <Subjects sub='Software Engineering' />
                <Subjects sub='Mobile Computing' />
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Button handleClick={() => setAddSubject(!addSubject)} ic="plus" icSize={30} width={60} height={60} />
            </View>
        </View>
        <Modal
            visible={addSubject}
            transparent
            animationType='fade'
            onRequestClose={() => setAddSubject(!addSubject)}
        >
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#00000099'}}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Pressable
                            style={styles.btn}
                            onPress={() => setAddSubject(!addSubject)}
                        >
                            <FontAwesome5 name="times" size={30} />
                        </Pressable>
                        <Pressable
                            style={styles.btn}
                            onPress={() => alert("ADD SUBJECT")}
                        >
                            <FontAwesome5 name="check" size={30} />
                        </Pressable>
                    </View>
                    <View style={styles.body}>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeText}
                            placeholder='Subject'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '90%',
        backgroundColor: '#333333'
    },
    top: {
        height: '10%',
        backgroundColor: '#A2A2A2',
        justifyContent: 'center',
        paddingLeft: 25
    },
    content: {
        flex: 1,
        backgroundColor: '#606060',
        height: "90%",
        justifyContent: 'space-between',
        padding: 25
    },
    modal: {
        width: 300,
        height: 300,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#3AB3C1',
        paddingHorizontal: 5
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#3AB3C1',
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        borderRadius: 10
    },
    btn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Subject