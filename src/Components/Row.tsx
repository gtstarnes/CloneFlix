import React from 'react'
import { useState, useEffect } from 'react';
import Movie from './Movie';

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState<Array<T>>([]);

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
            <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
                {movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie}  />})}
            </div>
        </div>
    </div>
  )
}

export default Row