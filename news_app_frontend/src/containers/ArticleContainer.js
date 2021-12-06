import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from '../components/articles/ArticleList';
import ArticleDetail from '../components/articles/ArticleDetail';
import ArticleForm from '../components/articles/ArticleForm';
import Request from '../helpers/request';

const ArticleContainer = () => {

    const [articles, setArticles] = useState([]);

    const requestAll = function () {
        const request = new Request();
        const articlePromise = request.get('/api/articles')

        Promise.all([articlePromise])
            .then((data) => {
                setArticles(data[0]);
            })
    }

    useEffect(() => {
        requestAll()
    }, [])

    const findArticleById = function (id) {
        return articles.find((article) => {
            return article.id === parseInt(id);
        })
    }

    const handleDelete = function (id) {
        const request = new Request();
        const url = "/api/articles/" + id
        request.delete(url)
            .then(() => window.location = "/articles")
    }

    const handlePost = function () {
        const request = new Request();
        request.post("/api/articles", articles)
            .then(() => window.location = '/articles')
    }

    const handleUpdate = function (article) {
        const request = new Request();
        request.patch('/api/articles/' + article.id, article)
            .then(() => {
                window.location = '/articles/' + article.id
            })
    }


    if (!articles) {
        return null
    }
    return (
        <>

            <Switch>

                <Route exact path='/articles/new' render={() => {
                    return <ArticleForm onCreate={handlePost} />
                }} />

                <Route exact path="/articles/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const article = findArticleById(id);
                    return <ArticleForm article={article} onUpdate={handleUpdate} />
                }} />


                <Route exact path="/articles/:id" render={(props) => {
                    const id = props.match.params.id;
                    const article = findArticleById(id);
                    return <ArticleDetail article={article}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                }} />


                <Route render={() => {
                    return <h1>I am article container</h1>
                    // return <ArticleList articles={articles} />
                }} />

            </Switch>

        </>
    )
}

export default ArticleContainer;