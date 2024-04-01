import React from 'react'
import { useState, useEffect } from 'react';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md';

type Row = {
    title: string,
    fetchURL: string,
    rowID: string
}

type Movie = {
    backdrop_path: string,
    id: number,
    title?: string,
    name?: string
}

const Row = ({title, fetchURL, rowID}: Row) => {
    const [movies, setMovies] = useState<Array<Movie>>([]);

    useEffect(() => {
        fetch(fetchURL)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, [fetchURL])

    const slideLeft = () => {
        const slider: HTMLElement | null = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        const slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <div>
        <h2 className="font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft className='bg-white text-black rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex shadow-md' size={40} onClick={slideLeft} />
            <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth">
                {movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie}  />})}
            </div>
            <MdChevronRight className='bg-white text-black rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex shadow-md' size={40} onClick={slideRight} />
        </div>
    </div>
  )
}

export default Row