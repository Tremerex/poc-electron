import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ElTiempoIcon from '../Icons/elTiempo'

const Container = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 16px;
    background: linear-gradient(45deg, #2B3B70 0%, #2B3B70 40.08%, #222E57 100%);
    `;

const RightContainer = styled.div`
    color: white;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    `;

const MarketName = styled.div`
  font-weight: bold;
`;
const CurrentTime = styled.div``;



const WeatherHeader = ({ marketName, currentTime }) => {
  return (
    <Container >
      <ElTiempoIcon
        width={70}
        height={28}
      />
      <RightContainer>
        <MarketName>{marketName}</MarketName>
        <CurrentTime>{currentTime}</CurrentTime>
      </RightContainer>
    </Container>
  );
};

WeatherHeader.propTypes = {
  marketName: PropTypes.string,
  currentTime: PropTypes.string,
  className: PropTypes.string,
  isOpeningWeatherForecast: PropTypes.bool,
  rightComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
};

WeatherHeader.defaultProps = {
  marketName: "Miami*",
  currentTime: "Jueves 5:39 PM*"
}

export default WeatherHeader;
