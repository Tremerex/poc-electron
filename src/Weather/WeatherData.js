import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WeatherIcons from '../Icons/weather'
import get from 'lodash/get'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 12px;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex: 1;
  /* background-color: red; */
`;

const WeatherContainerLeft = styled.div`
  display: flex;
  flex: 0.5;
  /* background-color: red; */
`;

const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`;

const Temperature = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
`

const WeatherPhrase = styled.div`
  align-self: center;
  text-align: center;
  flex: 0.5;
  font-weight: bold;
`

const MinMaxItem = styled.div`
`

const ConditionsContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 1;
  padding-top: 8px;
`;

const ConditionsDesc = styled.span`
  font-size: 0.8rem;
`

const ConditionsItem = styled.span`
`


const WeatherData = ({
  icon,
  temp,
  tempUnit,
  minTemp,
  maxTemp,
  phrase,
  precipChance,
  humidity,
  wind,
}) => {

  const CurrentWeatherIcon = get(WeatherIcons,[icon])
  const MinTempIcon = WeatherIcons['minTemp']
  const MaxTempIcon = WeatherIcons['maxTemp']

  return (
    <Container >
      <WeatherContainer>
        <WeatherContainerLeft>
        {CurrentWeatherIcon && <CurrentWeatherIcon width={56} height={56} viewBox={"0 0 256 256"}/>}
        <TemperatureContainer>
          <Temperature>
            {temp}º{tempUnit}
          </Temperature>
          <MinMaxContainer>
            <MinMaxItem>
              <MinTempIcon width={11} height={11} viewBox={"0 0 256 256"}/>
              {" " + minTemp}º
            </MinMaxItem>
            <MinMaxItem>
            <MaxTempIcon width={11} height={11} viewBox={"0 0 256 256"}/>
              {" " + maxTemp}º
            </MinMaxItem>
          </MinMaxContainer>
        </TemperatureContainer>
        </WeatherContainerLeft>
        <WeatherPhrase>
          {phrase}
        </WeatherPhrase>
      </WeatherContainer>
      <ConditionsContainer>
        <ConditionsItem>
          <ConditionsDesc>{"Prob. lluvia: "}</ConditionsDesc>
          <b>{precipChance}%</b>
        </ConditionsItem>
        <ConditionsItem>
          <ConditionsDesc>{"Humedad: "}</ConditionsDesc>
          <b>{humidity}%</b>
        </ConditionsItem>
        <ConditionsItem>
          <ConditionsDesc>{"Viento: "}</ConditionsDesc>
          <b>{wind}</b>
        </ConditionsItem>
      </ConditionsContainer>
    </Container>
  );
};

WeatherData.propTypes = {
  icon: PropTypes.string,
  tempUnit: PropTypes.string,
  temp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  precipChance: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.string,
};

WeatherData.defaultProps = {
  icon: "sunny",
  temp: 13,
  tempUnit: 'C*',
  minTemp: 13,
  maxTemp: 13,
  phrase: 'Mayormente nublado*',
  precipChance: 13,
  humidity: 13,
  wind: 'SSE 8mph*'
}

export default WeatherData;
