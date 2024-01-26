import React from 'react';

interface Props {
    name: string;
    id: number;
    DeleteMovie: (id:number) => void
}

const MoviesItem:React.FC<Props> = ({name, id, DeleteMovie, changeName}) => {
    return (
        <div>
            <input id={id} value={name}/>
            <button onClick={DeleteMovie}>Delete</button>
        </div>
    );
};

export default MoviesItem;