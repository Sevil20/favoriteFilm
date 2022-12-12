import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const  Movies =(props)=> {
const [state,setState] = useState({
    movies:[],
    
})

const {search} = props
    // const [state,setState]=useState([]
    //     // movies:[
    //     //     // {
    //     //     //     imdbID: 'tt3896198',
    //     //     //     title: "Guardians of the Galaxy Vol. 2",
    //     //     //     year: 2017,
    //     //     //     poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    //     //     // },
    //     //     // {
    //     //     //     imdbID: 'tt0068646',
    //     //     //     title: "The Godfather",
    //     //     //     year: 1972,
    //     //     //     poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    //     //     // }
    //     // ]
    // )
    // 82778cb5
    // e697c4f
    
    useEffect(()=>{
       
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=82778cb5`)
      .then(response =>response.json())
      .then(data => setState({...state, movies:data.Search}))
    },[search])

    console.log(state,"bura state")
        return ( 
            <ul className="movies">
                {state.movies?.length>0?state.movies.map((movie) => {
                    console.log(movie)
                   return(
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                )}):''}
            </ul>
        );
 
}
 
export default Movies;