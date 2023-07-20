import React from 'react'
import { useState, useEffect } from 'react'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([])

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

            </div>
        </div>
    </div>
  )
}

export default Row