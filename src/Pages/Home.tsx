import React from 'react'
import Main from '../Components/Main';
import Row from '../Components/Row';
import requests from '../requests';

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Coming Soon" fetchURL={requests.requestUpcoming} />
      <Row title="Popular on CloneFlix" fetchURL={requests.requestPopular} />
      <Row title="Critically Acclaimed Movies" fetchURL={requests.requestTopRated} />
      <Row title="Popular TV Shows" fetchURL={requests.requestTv} />
      <Row title="Coming Soon" fetchURL={requests.requestUpcoming} />
    </>

  )
}

export default Home