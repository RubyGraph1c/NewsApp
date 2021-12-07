import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from '../components/articles/ArticleList';
import ArticleDetail from '../components/articles/ArticleDetail';
import ArticleForm from '../components/articles/ArticleForm';

import Request from '../helpers/request';

const ArticleContainer = () => {

    const [articles, setArticles] = useState([]);
    const [journalists, setJournalists] = useState([]);
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);


    const requestAll = function () {
        const request = new Request();
        const articlePromise = request.get('/api/articles')
        const journalistPromise = request.get('/api/journalists')
        const categoryPromise = request.get('/api/categories')
        const locationPromise = request.get('/api/locations')


        Promise.all([articlePromise, journalistPromise, categoryPromise, locationPromise])
            .then((data) => {
                setArticles(data[0]);
                setJournalists(data[1])
                setCategories(data[2])
                setLocations(data[3])

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
            .then(() => window.location = "api/articles")
    }

    const handlePost = function (article) {
        const request = new Request();
        request.post("/api/articles", article)
            .then(() => window.location = '/articles')
    }

    const handleUpdate = function (article) {
        const request = new Request();
        request.patch('/api/articles/' + article.id, article)
            .then(() => {
                window.location = '/articles/' + article.id
            })
    }

    const sortByDate = function () {
        const articlesToUpdate = [...articles]
        for (let articleToUpdate of articlesToUpdate){
            articleToUpdate.date = new Date(articleToUpdate)
        }
        const sortedArticlesToUpdate = articlesToUpdate.sort((a, b) => b.date - a.date)
        setArticles(sortedArticlesToUpdate)
    }


    if (!articles) {
        return null
    }
    return (
        <>

            <Switch>

                <Route exact path='/articles/new' render={() => {
                    return <ArticleForm journalists={journalists} categories={categories} locations={locations} onCreate={handlePost} />
                }} />

                <Route exact path="/articles/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const article = findArticleById(id);
                    return <ArticleForm article={article} journalists={journalists} categories={categories} locations={locations} onUpdate={handleUpdate} />
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
                    // return <h1>I am article container</h1>
                    return <ArticleList articles={articles} sortByDate={sortByDate} />
                }} />

            </Switch>

        </>
    )
}

export default ArticleContainer;