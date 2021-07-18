import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props){
    return (
        <View style={styles.backdrop}>
            <View style={{flexDirection :'row',alignItems : 'center'}}>
                <Text style={styles.text2}>{props.main} : </Text>
                <Text style={styles.text2}>{props.description}</Text>
            </View>
            <View style={{flexDirection :'row',alignItems : 'center'}}>
                <Text style={styles.text2}>Temp : </Text> 
                <View style={{flexDirection :'row'}}>
                    <Text style={styles.text1}>{props.temp}</Text>
                    <Text style={styles.text2}>°c</Text>
                </View>
            </View>
            <View style={{flexDirection :'row',alignItems : 'center'}}>
                <Text style={styles.text2}>feels like : </Text>
                <View style={{flexDirection :'row'}}>
                    <Text style={styles.text1}>{props.feels_like}</Text>
                    <Text style={styles.text2}>°c</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    back_g: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '40%',
    },
    white: {
        color: 'white'
    },
    text1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10
    },
    text2: {
        fontSize: 24,
        color: 'white',
        marginVertical: 10
    },
    
});