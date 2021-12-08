import React from 'react';
import { Link } from 'react-router-dom';


const Article = ({ article }) => {

    if (!article) {
        return <p>Loading...</p>
    }

    const url = "/articles/" + article.id;

    return (
        <>
            <p>Written by: {article.journalist.name}</p>
            <p>Date: {article.date}</p>
            {/* <p>{article.category.type} | {article.location.name}</p> */}
            <p> {article.location.name}</p>
            <Link to={url} className="name">
                {article.headline}
            </Link>
            <img src={article.image} height="auto" width="100%" alt="Article" />
            <p>{article.summary}</p>
        </>
    )
}

export default Article;