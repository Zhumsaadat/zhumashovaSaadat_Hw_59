import React from 'react';

interface Props {
    joke: string
}

const SomeJoke:React.FC<Props> = ({joke}) => {
    return (
        <div>
            <p className="m-2 px-5 py-3 border border-black">{joke}</p>
        </div>
    );
};

export default SomeJoke;