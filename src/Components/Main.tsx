import React from 'react'
import { useState, useEffect } from 'react';
import requests from '../requests'

const Main = () => {
  const [movies, setMovies] = useState({});
  const movie: object = movies[Math.floor(Math.random() * movies.length)];
  

  useEffect(() => {
    fetch(requests.requestPopular)
    .then(response => response.json())
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));
  },[])

  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
      <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />
      </div>
    
    </div>
  )
}



export default Main