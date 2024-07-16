import React from 'react';
import {useState} from 'react';

export default function MovieSelector({Selection}){
    const [selected, setSelected]=useState(null);
    const movieArr = ['Terminator', 'Predators', 'Gods Not Dead', 'John Wick'];
    const handleMovieSelection = (e)=>{
        const movie = e.target.value;
        setSelected(movie);
        Selection(movie);
    };
    return(
        <>
        <h3>Movie list:</h3>
        <select value={selected} onChange={handleMovieSelection}>
            {movieArr.map(movie=>(
                <option>{movie}</option>
            ))}
        </select>
        </>
    )

};