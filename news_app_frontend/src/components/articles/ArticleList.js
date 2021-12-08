import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, sortByDate, categories, filterByCategory, filter, setFilter, setArticles }) => {
    if (articles.length === 0) {
        return (<p>Loading...</p>)
    }

    const articleNodes = articles.map((article, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Article article={article} />
                    {/* <p>{article.summary}</p> */}
                </div>
            </li>
        )
    })

    const categoryOptions = categories.map((category, index) => {
        return <option key={index} value={index}>{category.type}</option>
    })

    const handleFilter = (event) => {
        console.log(event.target.value)
        const selectedCategory = categories[event.target.value]
        console.log(selectedCategory)
        setArticles(selectedCategory.articles)
        // setFilter(selectedCategory.type)
        // filterByCategory()
    }

    return (
        <>
            <h1>Top Stories</h1>
            <select name="category" onChange={handleFilter}>
                <option disabled value='select-category'>Select a category</option>
                {categoryOptions}
            </select>
            <button onClick={sortByDate}> Sort by Date </button>
            {articleNodes}

        </>
    )
}

export default ArticleList;