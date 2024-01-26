import React, { useEffect, useState } from 'react';
import SomeJoke from './SomeJoke';

const Jokes: React.FC = () => {
    const [joke, setJoke] = useState('');

    const url = 'https://api.chucknorris.io/jokes/random';


    const getChuckNorrisJoke = async () => {
        const fetchData = async () => {
        const response = await fetch(url);

            if (response.ok) {
                const objJoke = await response.json();
                const someJoke = objJoke.value
                setJoke(someJoke);
                console.log(joke)
            }
        };

        fetchData().catch(e => console.error(e));
    };


    return (
        <>
            <nav className="navbar bg-primary mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Jokes</a>
                </div>
            </nav>
            <div>
                <button className="m-3" onClick={getChuckNorrisJoke}>
                    Get Joke
                </button>

                <SomeJoke joke={joke} />
            </div>
        </>

    );

};

export default Jokes;