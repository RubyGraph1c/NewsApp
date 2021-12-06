import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    if (articles.length === 0) {
        return (<p>Loading...</p>)
    }

    const articleNodes = articles.map((article, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Article article={article} />
                    <p>{article.summary}</p>
                </div>
            </li>
        )
    })

    return (
        <>
        <h1>Top Stories</h1>
        {articleNodes}
        </>
    )
}

export default ArticleList;