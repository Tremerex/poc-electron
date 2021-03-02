import { createSlice } from '@reduxjs/toolkit';
import { marketCoordinates } from '../../constants/marketMetadata';

const DEFAULT_MARKET_ID = 'KABE';

const initialState = {
  marketId: DEFAULT_MARKET_ID,
  ...marketCoordinates[DEFAULT_MARKET_ID],
};

const reducers = {
  setMarket: (state, action) => ({
    ...state,
    ...action.payload,
  }),
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers,
});

export const {
  setMarket,
} = marketSlice.actions;

export default marketSlice.reducer;
