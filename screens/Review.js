import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import Button from '../components/Button'
import FontAwesome5 from '../node_modules/react-native-vector-icons/FontAwesome5'

const Review = (props) => {
    const txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam iusto consequuntur fugiat recusandae id ad dolor, omnis accusantium illum unde placeat dignissimos nisi? Nulla vitae quod laudantium numquam officia?z'
    const [btnTitle, setBtnTitle]  = useState("SHOW")
    const btnClick = () => {
        if(btnTitle == "SHOW"){
            setBtnTitle("HIDE")
        }
        else{
            setBtnTitle("SHOW")
        }
    }
    return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Pressable
                onPress={props.moveToHome}
            >
                <FontAwesome5 name="arrow-left" size={25} />
            </Pressable>
        </View>
        <View style={styles.body}><Text> {txt} </Text></View>
        <View style={styles.bottom}>
            <Button ic="angle-left" icSize={25} width='20%' height={50} />
            <Button title={btnTitle} handleClick={btnClick} width='50%' height={50}/>
            <Button ic="angle-right" icSize={25} width='20%' height={50}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333333',
        borderWidth: 5,
        justifyContent: 'space-between',
        padding: 20
    },
    // top: {
    //     paddingTop: 20,
    //     paddingLeft: 20,
    // },
    body: {
        // marginHorizontal: 20,
        borderWidth: 5,
        height: 350,
        backgroundColor: '#606060' ,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    bottom: {
        flexDirection: 'row',
        marginBottom: 70,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
})

export default Review