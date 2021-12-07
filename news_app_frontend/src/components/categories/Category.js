import React from 'react';
import {Link} from 'react-router-dom';


const Category = ({ category }) => {

    if (!category) {
        return <p>Loading...</p>
    }

    const url = "/categories/" + categories.id;

    return (
        <>
            <Link to={url} className="name">
                {category.type}
            </Link>
        </>
    )
}

export default Category;