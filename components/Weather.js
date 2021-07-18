import React,{useState, useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        feels_like: 0,
    })


    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1907c2e8455bbd7749315815aad1ff88`)
                .then((response) => response.json())
                    .then((json) => {
                        setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        feels_like: json.main.feels_like,
                        });
                    })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])
       

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                    <View style={styles.back_g}>
                        <Text/>
                        <Text style={styles.text2}>{props.place} {props.zipCode}</Text>
                        <Forecast {...forecastInfo} />
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