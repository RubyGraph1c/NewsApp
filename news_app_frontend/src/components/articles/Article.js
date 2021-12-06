import React from 'react';
import {Link} from 'react-router-dom';


const Article = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/" + article.id;

    return (
        <>
            <img src={article.image} height="auto" width="300px" alt="Article" />
            <Link to={url} className="name">
                {article.headline} {article.summary}
            </Link>
            <p>Summary: {article.summary}</p>
            <p>Written by: {article.journalist.name}</p>
            <p>Category: {article.category.type}</p>
            <p>Location: {article.location.name}</p>
            <p>Date: {article.date}</p>
        </>
    )
}

export default Article;