import { setMarket } from '.';
import { marketCoordinates } from '../../constants/marketMetadata';

export const setMarketData = (marketId) => {
  return (dispatch) => {
    dispatch(setMarket({ ...marketCoordinates[marketId], marketId }));
  };
};
