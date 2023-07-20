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
                    return <div className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px] inline-block cursor-pointer p-4">
                        <img className="" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie?.title} />
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Row