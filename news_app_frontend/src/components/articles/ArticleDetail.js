import React from 'react'; 
import Article from './Article';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ article, onDelete }) => {
    if (!article) {
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(article.id)
    }

    const editUrl = "/articles" + article.id + "/edit"

    return (
        <div className="component">
            <p>Date: {article.date}</p>

            <Article article={article}/>
            <p>Written by: {article.journalist.name}</p>
            <p>{article.fullStory}</p>
            <button onClick={handleDelete}>Delete {article.headline}</button>
            <Link to={editUrl}><button type="button"> Edit {article.headline}</button></Link>
        </div>
    )

}

export default ArticleDetail;