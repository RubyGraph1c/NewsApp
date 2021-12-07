import React from 'react';
import {Link} from 'react-router-dom';


const Location = ({ location }) => {

    if (!location) {
        return <p>Loading...</p>
    }

    const url = "/locations/" + locations.id;

    return (
        <>
            <Link to={url} className="name">
                {location.name}
            </Link>
        </>
    )
}

export default Location;