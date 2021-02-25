import React from 'react';
import Head from 'next/head';

export const getStaticProps = async () => {
  const response = await fetch('https://syndicator.univision.com/web-api/local-market-content?url=https://www.univision.com');
  const result = await response.json();
  const { status } = result;
  return {
    props: {
      hasAccess: status === 'success',
    },
  }
};

const Main = (props) => {
  const { hasAccess } = props;
  return (
    <>
      <Head>
        <title>Next with Electron</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        { JSON.stringify(props) }
      </div>
      <div>
        { hasAccess ? 'you don´t have access' : 'hello world!' }
      </div>
    </>
  );
};

export default Main;
