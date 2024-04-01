import React from 'react'
import Main from '../Components/Main';
import Row from '../Components/Row';
import requests from '../requests';


const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Coming Soon" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular on CloneFlix" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Critically Acclaimed Movies" fetchURL={requests.requestTopRated} />
      <Row rowID="4" title="Frightfully Scary" fetchURL={requests.requestHorror} />
      <Row rowID="5" title="Animated Movies" fetchURL={requests.requestAnimation} />
      <Row rowID="6" title="Hilarious and Light-Hearted" fetchURL={requests.requestComedy} />
      <Row rowID="7" title="Crime and Punishment" fetchURL={requests.requestCrime} />
      <Row rowID="8" title="Dramas" fetchURL={requests.requestDrama} />
      <Row rowID="9" title="Top Rated Shows" fetchURL={requests.requestTv} />
    </>

  )
}

export default Home