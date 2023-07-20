import React from 'react'
import { useState, useEffect } from 'react'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState<Array<T>>([])

    useEffect(() => {
        fetch(fetchURL)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, [fetchURL])



  return (
    <div>
        <h2 className="font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}>
                {movies.map((movie) => {
                    return <div className="w-[200px] sm:w-[280px] md:w-[360px] lg:w-[440px] inline-block cursor-pointer relative p-2">
                                <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie?.title} />
                                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100">
                                    <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{movie?.title}</p>
                                </div>

                            </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Row