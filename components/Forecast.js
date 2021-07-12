import React from 'react'
import { Text, View } from 'react-native'

export default function Forecast(props){
    return (
        <View style={props.styles.backdrop}>
            <Text style={props.styles.text1}>{props.main}</Text>
            <Text style={props.styles.text2}>{props.description}</Text>
            <View style={{flexDirection :'row'}}>
                <Text style={props.styles.text1}>{props.temp}</Text>
                <Text style={props.styles.text2}>°c</Text>
            </View>
            
        </View>
    )
}