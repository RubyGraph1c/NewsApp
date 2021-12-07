import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, sortByDate }) => {
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
            <button onClick={sortByDate}> Sort by Date </button>
            {articleNodes}
        </>
    )
}

export default ArticleList;