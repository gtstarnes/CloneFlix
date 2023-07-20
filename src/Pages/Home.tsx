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
      <Row title="Frightfully Scary" fetchURL={requests.requestHorror} />
      <Row title="Animated Movies" fetchURL={requests.requestAnimation} />
      <Row title="Hilarious and Light-Hearted" fetchURL={requests.requestComedy} />
      <Row title="Crime and Punishment" fetchURL={requests.requestCrime} />
      <Row title="Dramas" fetchURL={requests.requestDrama} />
    </>

  )
}

export default Home