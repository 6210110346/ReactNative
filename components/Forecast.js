import React from 'react'
import { Text, View } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text style={props.styles.view}>{props.main}</Text>
            <Text style={props.styles.view}>{props.description}</Text>
            <Text style={props.styles.view}>{props.temp}°c</Text>
            <Text></Text>
        </View>
    )
}