import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Head from 'next/head';
import App from '../App'

import rootReducer from "../features";

const store = configureStore({
  reducer: rootReducer,
});

const Main = () => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          -webkit-app-region: drag;
        }
      `}
      </style>
      <Head>
        <title>Next with Electron</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Main;
