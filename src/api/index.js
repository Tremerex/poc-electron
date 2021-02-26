// const options = {
//   method: 'GET',
//   headers: new Headers({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Content-Type",
//     "Content-Type": "application/json",
//     "Accept":"application/json",
//     "origin": "www.univision.com"
//   })
// }

export const  fetchLocalMarket = () => {
  return fetch('https://syndicator.univision.com/web-api/local-market-content?url=https://www.univision.com/')
    .then(response => response.json())
    .then(data => data);
}

export const  getMarketWeather = (market) => {
  return fetch(`https://uat2.x.univision.com/proxy/api/cached/weather/widgets/station/es-US/${market}`)
    .then(response => response.json())
    .then(data => data);
}

