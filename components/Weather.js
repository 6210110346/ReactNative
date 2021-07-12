import React,{useState, useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
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
                        temp: json.main.temp
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
                    <View style={styles.backdrop}>
                        <Text/>
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
        fontWeight: 'bold',
        marginVertical: 10
    },
    text2: {
        fontSize: 24,
        color: 'white',
        marginVertical: 10
    },
    
});