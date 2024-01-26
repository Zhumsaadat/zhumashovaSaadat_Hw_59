import React, { useState } from 'react';
import Movies from '../Movies/Movies';
import Jokes from '../Jokes/Jokes';

const AppContainer:React.FC = () => {
    const[showMovie, setShowMovie] = useState(false);
    const[showJokes, setJokes] = useState(false);

    const showMovieBlock = () => {
        setShowMovie(prevState => true);
    };


    function showJokesBlock() {
        setJokes(prevState => true);
    };

    const classNameShowBtn = () => {
        if(showJokes === true || showMovie === true){
            return ['btn-primary m-2 d-none']
        }else {
            return ['btn-primary', 'm-2', 'd-block'];
        };
    };


    return (
        <div>
            <button onClick={showMovieBlock} className={classNameShowBtn()}>Movies Block</button>
            <button onClick={showJokesBlock} className={classNameShowBtn()}>Jokes Block</button>

            <div className={showMovie ? 'MoviesBlock d-block' : 'MoviesBlock d-none'}>
                <Movies/>
            </div>
            <div className={showJokes ? 'MoviesBlock d-block' : 'MoviesBlock d-none'}>
                <Jokes/>
            </div>


        </div>
    );
};

export default AppContainer;