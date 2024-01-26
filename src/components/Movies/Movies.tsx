import React, { useState } from 'react';
import MoviesItem from './MoviesItem';



const Movies:React.FC = React.memo( () =>{
    const[movies, setMovies] = useState([
    {name: 'Железный человек', id: 1},
    {name: 'Человек паук', id: 2},
    {name: 'Огонь и Вода', id: 3},
]);

const [inputValue, setInputValue] = React.useState({
    name:'',
    id: '',
});

const changeMovie = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setInputValue(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }));
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


const changeName = (id: number, newName: string): void => {
    setMovies((prevMovies) =>
        prevMovies.map((movie) =>
            movie.id === id ? { ...movie, name: newName } : movie
        )
    );
};

return (
    <>
        <div className="movieForm m-3">
            <form onSubmit={addMovie}>
                <label htmlFor="addMove" className="form-label">Add new movie</label>
                <input type="text"
                       name={name}
                       className="form-control"
                       id="addMove" name="name"
                       onChange={changeMovie}
                       placeholder="Enter movie title"
                       value={inputValue.name}
                />
                <button className='btn-light m-2 px-3'>Add</button>
            </form>

        </div>
        <div>
            {movies.map(movie => {
                return <MoviesItem
                    name={movie.name}
                    key={movie.id}
                    DeleteMovie={() => deleteMovie(movie.id)}
                    changeName={(newName) => changeName(movie.id, newName)} />
            })}
        </div>
    </>
)
})

export default Movies;


