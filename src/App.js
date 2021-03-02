import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Lottie from 'lottie-react';
import styled from 'styled-components'
import { fetchMarketWeather } from './features/weather'
import WeatherContainer from './Weather/WeatherContainer'
import { getLottieAnimation } from './lottie';

const Container = styled.div`
`;

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
`;

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2,
};

function App({
  getMarketWeather, marketId, status, weather,
}) {
  useEffect(() => {
    if (marketId) {
      getMarketWeather(marketId);
    }
  }, [marketId]);

  const isLoading = status === STATUS.LOADING;

  return (
    <Container>
      {!isLoading && <WeatherContainer data={weather} marketId={marketId}/>}
      {isLoading &&
       ( <LoadingContainer >
          <Lottie animationData={getLottieAnimation()}/>
        </LoadingContainer>)
    }
    </Container>
  );
}

const mapStateToProps = ({ weather, market }) => ({
  weather: weather.data,
  status: weather.status,
  marketId: market.marketId,
});

const mapDispatchToProps = dispatch => ({
  getMarketWeather: market => dispatch(fetchMarketWeather(market))
});

const areStatesEqual = (nextProps, prevProps) => {
  return nextProps.weather.status === prevProps.weather.status
    && nextProps.market.marketId === prevProps.market.marketId;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: true,
    areStatesEqual,
  }
)(App);
