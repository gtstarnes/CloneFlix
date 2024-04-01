import React from 'react'
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

type Movie = {
  backdrop_path: string,
  title?: string,
  name?: string,
}



const Movie = ({movie}: {movie: Movie}) => {
    const [favorite, setFavorite] = useState(false);
    const changeFavorite = () => {
      setFavorite(!favorite)
    }
  return (
    <div className="w-[280px] sm:w-[280px] md:w-[360px] lg:w-[440px] inline-block cursor-pointer relative mx-2">
        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title || movie.name} />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 break-all">
            <p className="white-space-normal text-xs sm:text-sm md:text-lg lg:text-xl font-bold flex flex-wrap justify-center items-center h-full text-center">{movie.title || movie.name}</p>
            <p>
                {favorite ? <FaHeart className="absolute top-4 right-4 sm:top-3 sm:right-3 scale-125 md:scale-150 text-gray-300" onClick={changeFavorite} /> : <FaRegHeart className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-300 scale-125 md:scale-150" onClick={changeFavorite} />}
            </p>
        </div>
    </div>
  )
}

export default Movie