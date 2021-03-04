import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { setMarketData } from '../features/market/market';
import ArrowRight from '../Icons/arrowRight';

import { marketCoordinates } from '../constants/marketMetadata';

const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const LinksDescription = styled.div`${({ visible }) => css`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  line-height: 0.75rem;
  text-align: right;
  margin-right: -4px;
  svg {
    transform: ${visible ? 'rotate(-90deg)' : 'rotate(90deg)'};
  }
`}`;

const LinkList = styled.div`
  background-color: white;
  color: #000;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  padding: 4px 14px;
  position: absolute;
  right: 0;
  top: 22px;
  width: 300px;
  z-index: 3;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 112px;
  padding: 4px;
`;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
`;

const MarketSelector = ({ onSetMarket, market }) => {
  const [marketList, setMarketList] = useState([]);
  const [city, setCity] = useState(market);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setMarketList(Object.entries(marketCoordinates).map(([marketId, marketData]) => {
      return { marketId, ...marketData };
    }));
  }, [setMarketList]);

  useEffect(() => {
    onSetMarket(city.marketId);
    setVisible(false);
  }, [city.marketId]);

  return (
    <Container>
      <LinksDescription visible={isVisible} onClick={() => setVisible(true)}>
        {market.name}
        <ArrowRight width={24} height={24} viewBox="0 0 256 256" />
      </LinksDescription>
      {isVisible && (
        <>
          <ModalBackGround onClick={() => setVisible(false)} />
          <LinkList>
            {Array.isArray(marketList) && marketList.map((marketData) => {
              return (
                <LinkItem key={marketData.marketId} onClick={() => setCity(marketData)}>
                  {marketData.name}
                </LinkItem>
              );
            })}
          </LinkList>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = ({ market }) => ({ market });

const mapDispatchToProps = (dispatch) => ({
  onSetMarket: (marketId) => dispatch(setMarketData(marketId)),
});

const areStatePropsEqual = (nextProps, prevProps) => {
  return nextProps.market.marketId === prevProps.market.marketId;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: true,
    areStatePropsEqual,
  }
)(MarketSelector);
