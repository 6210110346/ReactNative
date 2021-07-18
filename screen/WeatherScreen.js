import React from 'react'
import { View } from 'react-native'
import Weather from '../components/Weather'

export default function WeatherScreen({route}){
    console.log(route.params.zipPlace)
    console.log(route.params.zipCode)
    return(
        <View>
            <Weather zipCode = {route.params.zipCode} place = {route.params.place}/>
        </View>
    )
}