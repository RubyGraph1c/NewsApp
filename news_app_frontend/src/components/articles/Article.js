import React from 'react';
import {Link} from 'react-router-dom';


const Article = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/" + article.id;

    return (
        <>
            <img src={article.image} height="auto" width="100%" alt="Article" />
            <Link to={url} className="name">
                {article.headline}
            </Link>
            {/* <p>Written by: {article.journalist.name}</p> */}
            <p>{article.category.type} | {article.location.name}</p>
        
            {/* <p>Date: {article.date}</p> */}
        </>
    )
}

export default Article;