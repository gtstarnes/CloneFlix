
import { useState, useEffect } from 'react';
import requests from '../requests'

type Movie = {
  title: string,
  backdrop_path: string,
  release_date: string,
  overview: string,
}

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const year = movie?.release_date.slice(0,4);

  useEffect(() => {
      fetch(requests.requestPopular)
      .then(response => response.json())
      .then((response: {results: Movie[]}) => setMovies(response.results))
      .catch(err => console.error(err));
    
  },[])

  const shortenSummary = (string:string, num:number) => {
    if(string?.length > num){
      return string.slice(0, num) + ' . . .'
    }
  }

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black to-transparent"></div>
      <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="my-4">
          <button className="bg-gray-300 text-black border-gray-300 py-2 px-5 w-[80px]">Play</button>
          <button className="border border-gray-200 py-2 px-5 ml-4">Watch Later</button>
        </div>
        <p className="text-gray-400 text-md mb-4">{year}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-gray-300">{shortenSummary(movie?.overview, 150)}</p>
      </div>  
    </div>
  )
}



export default Main