import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WeatherIcons from "../Icons/weather";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
`;

const NextDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8px;
`;

const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
`;

const Temperature = styled.div`
  font-size: 1rem;
  font-weight: bold;
  align-self: center;
  padding-left: 4px;
`;

const NextDataHour = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
`;

const NextDataItem = ({ data }) => {
  const { localeTime, temp, icon } = data || {};
  const HourWeatherIcon = WeatherIcons[icon];

  return (
    <NextDataContainer>
      <TemperatureContainer>
        {HourWeatherIcon && <HourWeatherIcon width={24} height={24} viewBox={"0 0 256 256"} />}
        <Temperature> {temp}º </Temperature>
      </TemperatureContainer>
      <NextDataHour> {localeTime} </NextDataHour>
    </NextDataContainer>
  );
};
NextDataItem.defaultProps = {
  localTime: "8:00 pm",
  icon: "rain",
  temp: "24",
};

const WeatherNextHoursData = ({ hourly }) => {
  const data = (hourly || []).slice(0, 3);
  return (
    <Container>
      {data.map((item, index) => {
        return <NextDataItem key={index} data={item} />;
      })}
    </Container>
  );
};

WeatherNextHoursData.propTypes = {
  hourly: PropTypes.array,
};

WeatherNextHoursData.defaultProps = {
  hourly: [
    {
      iconId: 'sunny',
      marketName: "Miami*",
      localeTime: "Jueves 5:39 PM*",
    },
    {
      iconId: 'sunny',
      marketName: "Miami*",
      localeTime: "Jueves 5:39 PM*",
    },
    {
      iconId: 'sunny',
      marketName: "Miami*",
      localeTime: "Jueves 5:39 PM*",
    },
  ],
};

export default WeatherNextHoursData;
