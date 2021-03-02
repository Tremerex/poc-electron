import { createAsyncThunk } from '@reduxjs/toolkit'

const WEATER_URL = 'https://uat2.x.univision.com/proxy/api/cached/weather/widgets/station/es-US/'

const fetchMarketWeatherAsync = async (market) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(`${WEATER_URL}${market}`)
        const data = await response.json();
        return resolve(data);
      } catch (ex) {
        return reject(ex);
      }
    }, 1000);
  });
};

export const fetchMarketWeather = createAsyncThunk(
  'weather/fetchMarketWeather',
  fetchMarketWeatherAsync,
);
