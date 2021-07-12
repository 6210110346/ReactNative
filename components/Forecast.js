import React from 'react'
import { Text, View } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text style={props.styles.text1}>{props.main}</Text>
            <Text style={props.styles.text2}>{props.description}</Text>
            <Text style={props.styles.text1}>{props.temp}°c</Text>
            <Text></Text>
        </View>
    )
}