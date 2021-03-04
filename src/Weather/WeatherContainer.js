import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherData from './WeatherData';
import WeatherNextHoursData from './WeatherNextHoursData';
import MarketSelector from '../MarketSelector';
import { getMarketmetadata } from '../constants/marketMetadata';
import { getIconById } from '../Icons/weather';
import styled from 'styled-components';
import moment from 'moment';
import { get } from 'lodash';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #e2e2e2;
  height: 100vh;
`

const ContentContainer = styled.div`
  flex: 1;
  display: 'flex';
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
`

const Space = styled.div`
  height: 16px;
`


function WeatherContainer({ data, marketId }) {
  const {
    icon: iconId,
    tempF,
    maxTempF,
    minTempF,
    humidity,
    windDirection,
    windSpeedMph,
    precipChance,
    phrase,
  } = data || {}

  const {
    name: marketName,
    timeZone,
  } = getMarketmetadata(marketId)

  const icon = getIconById(iconId)
  const wind = `${windDirection} ${windSpeedMph}mph`
  const currentTime = moment(new Date(), timeZone).format('ddd LT')
  const hourly = get(data, 'forecasts.hourly', []).slice(1).map(item => {
    const { localeTime, tempF, icon: iconId } = item
    return {
      localeTime: moment(localeTime).format('LT'),
      temp: tempF,
      icon: getIconById(iconId)
    }
  })

  return (
    <Container>
      <WeatherHeader marketName={marketName} currentTime={currentTime}>
        <MarketSelector />
      </WeatherHeader>
      <ContentContainer>
        <WeatherData phrase={phrase} tempUnit={'F'} wind={wind} precipChance={precipChance} icon={icon} temp={tempF} maxTemp={maxTempF} minTemp={minTempF} humidity={humidity} />
        <Space />
        <WeatherNextHoursData hourly={hourly} />
      </ContentContainer>
    </Container>
  );
}


export default WeatherContainer;
