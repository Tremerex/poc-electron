import { createSlice } from '@reduxjs/toolkit';
import { fetchMarketWeather } from './weatherAsync';

const initialState = {
  data: {},
  status: 0,
};

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
};

const extraReducers = {
  [fetchMarketWeather.pending]: (state, action) => ({
    ...state,
    data: initialState,
    status: 0, // Loading
  }),
  [fetchMarketWeather.fulfilled]: (state, action) => ({
    ...state,
    data: action.payload,
    status: 1, // Success
  }),
  [fetchMarketWeather.rejected]: (state) => ({
    ...state,
    data: dummyData,
    status: 2, // Error
  }),
};

const WeaterSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers,
});

export { fetchMarketWeather };

export default WeaterSlice.reducer;
