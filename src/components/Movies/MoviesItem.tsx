import React from 'react';

interface Props {
    name: string;
    id: number;
    DeleteMovie: (id:number) => void;
    changeName: (newName: string) => void;
}



const MoviesItem:React.FC<Props> = ({name, id, DeleteMovie, changeName}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeName(e.target.value);
    };

    return (
        <div>
            <input id={id} value={name} name={name} onChange={handleChange}/>
            <button onClick={DeleteMovie}>Delete</button>
        </div>
    );
};

export default MoviesItem;