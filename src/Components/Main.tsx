import React from 'react'
import { useState, useEffect } from 'react';
import requests from '../requests'

const Main = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    fetch(requests.requestPopular)
    .then(response => response.json())
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));
  },[])

  console.log(movies)
  return (
    <div>Imports</div>
  )
}

export default Main