import React from 'react';
import {Link} from 'react-router-dom';


const Journalist = ({ journalist }) => {

    if (!journalist) {
        return <p>Loading...</p>
    }

    const url = "/journalists/" + journalist.id;

    return (
        <>
            <img src={journalist.image} height="auto" width="100%" alt="Journalist" />
            <Link to={url} className="name">
                {journalist.name}
            </Link>
            <p>Journalist: {journalist.name}</p>
            {/* <p>{journalist.image}</p>
            <p>Articles: {journalist.article}</p> */}
        </>
    )
}

export default Journalist;