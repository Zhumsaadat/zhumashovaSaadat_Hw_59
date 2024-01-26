import React, { useState } from 'react';
import MoviesItem from './MoviesItem';

const Movies:React.FC = () => {

    const[movies, setMovies] = useState([
        {name: 'Железный человек', id: 1},
        {name: 'Человек паук', id: 2},
        {name: 'Огонь и Вода', id: 3},
    ]);

    const [inputValue, setInputValue] = React.useState('');

    const changeMovie = (event) => {
        setInputValue(event.target.value);
    };

    const deleteMovie=(id) =>{
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    }

    const addMovie = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const id = movies.length + 1;
        const newMovie = { name, id };
        setMovies(prevMovies => [...prevMovies, newMovie]);
        console.log(movies)
        e.target.name.value = '';
    }



    return (
        <>
            <div className="movieForm m-3">
                <form onSubmit={addMovie}>
                    <label htmlFor="addMove" className="form-label">Add new movie</label>
                    <input type="text"
                           className="form-control"
                           id="addMove" name="name"
                           onChange={changeMovie}
                           placeholder="Enter movie title"
                          value={inputValue}
                    />
                    <button className='btn-light m-2 px-3'>Add</button>
                </form>

            </div>
            <div>
                {movies.map(movie => {
                    return <MoviesItem name={movie.name} key={movie.id}  DeleteMovie={() => deleteMovie(movie.id)}/>
                })}
            </div>
        </>

    );
};

export default Movies;