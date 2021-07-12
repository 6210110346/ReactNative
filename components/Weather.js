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
                    <Text style={styles.view}>Zip Code is {props.zipCode}</Text>
                    <Text style={styles.view}>{props.zipCode}</Text>
                    <Forecast {...forecastInfo} styles={styles}/>
                
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
    view: {
        color: 'white'
    },
});