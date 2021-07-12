import React,{useState} from 'react'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
    })

    return (
        <Forecast {...forecastInfo}/>
    );
}
   