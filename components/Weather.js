import React,{useState} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
    })

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                    <View style={styles.backdrop}>
                        <Text style={styles.text2}> </Text>
                        <Text style={styles.text2}>Zip Code is {props.zipCode}</Text>
                        <Forecast {...forecastInfo} styles={styles}/>
                    </View>
                    
                
            </ImageBackground>
        </View>
            
    )
}
   
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    white: {
        color: 'white'
    },
    text1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 24,
        color: 'white',
    },
    
});