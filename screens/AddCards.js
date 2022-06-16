import React from 'react'
import {View, Text, StyleSheet, TextInput, ToastAndroid, Pressable} from 'react-native'
import Button from '../components/Button'
import FontAwesome5 from '../node_modules/react-native-vector-icons/FontAwesome5'

const AddCards = (props) => {
  const showToast = () => {
    ToastAndroid.show("1 CARD ADDED", ToastAndroid.SHORT);
  };
  const [text, onChangeText] = React.useState("");
  const txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam iusto consequuntur fugiat recusandae id ad dolor, omnis accusantium illum unde placeat dignissimos nisi? Nulla vitae quod laudantium numquam officia?z'
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
                onPress={() => alert("GO TO HOME SCREEN")}
            >
                <FontAwesome5 name='check' size={30} />
            </Pressable>
        </View>
        <View style={styles.content}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>Term</Text>
            <TextInput
                style={styles.input}
                onChange={text => onChangeText(text)}
                value='Term'
            />
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff', marginTop: 10}}>Definition</Text>
            <TextInput
                style={{...styles.input, ...{height: 200}}}
                value={txt+txt}
                multiline
                numberOfLines={8}
            />
            <View style={{alignItems: 'center',width: '100%', marginVertical: 30}}>
                <Button handleClick={showToast} title='ADD CARDS' width='100%'/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#606060'
    },
    top: {
        height: '10%',
        backgroundColor: '#A2A2A2',
        justifyContent: 'center',
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: '#606060',
        height: "90%",
        paddingHorizontal: 25,
        paddingTop: 70,
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

export default AddCards