import React, {useState, useEffect} from 'react';
import {fetchLocalMarket, getMarketWeather} from './api'
import WeatherContainer from './Weather/WeatherContainer'
import daynight from "./lottie/day-night.json";
import Lottie from "lottie-react";
import styled from 'styled-components'


const Container = styled.div`
`

const LoadingContainer = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  display: flex;
  width: 50%;

`

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2,
}

const dummyData = {
  "tempF": 74,
  "icon": 33,
  "phrase": "Despejado",
  "maxTempF": 83,
  "minTempF": 71,
  "humidity": 85,
  "windDirection": "NE",
  "windSpeedMph": 5,
  "precipChance": 0,
  "precipType": "rain",
  "forecasts": {
    "hourly": [
      {
        "localeTime": null,
        "tempF": 74,
        "icon": 33
      },
      {
        "localeTime": "2021-02-26T00:00:00-05:00",
        "tempF": 73,
        "icon": 31
      },
      {
        "localeTime": "2021-02-26T01:00:00-05:00",
        "tempF": 72,
        "icon": 31
      },
      {
        "localeTime": "2021-02-26T02:00:00-05:00",
        "tempF": 72,
        "icon": 33
      },
    ]
  }

}


function App() {
  const [marketId, setMarket] = useState(null)
  const [weatherDataStatus, setStatus] = useState(STATUS.LOADING)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(()=> {
    fetchLocalMarket().then(data => setMarket(data?.data?.call))
  }, [setMarket])

  useEffect(()=> {
    if(marketId) {
      setStatus(STATUS.LOADING)
      getMarketWeather(marketId).then(data => {
        setWeatherData(data)
        setTimeout(()=> setStatus(STATUS.SUCCESS), 5000)
      }).catch(()=> {
        setWeatherData(dummyData)
        setTimeout(()=> setStatus(STATUS.ERROR), 5000)
      })
    }
  }, [marketId])

  const isLoading = weatherDataStatus === STATUS.LOADING

  return (
    <Container>
      {!isLoading && <WeatherContainer data={weatherData} marketId={marketId}/>}
      {isLoading && 
       ( <LoadingContainer >
          <Lottie animationData={daynight}/>
        </LoadingContainer>)
    }
    </Container>
  );
}

export default App;
