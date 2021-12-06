import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import ArticleContainer from './ArticleContainer';

const MainContainer = () => {

    // const articles = fetch("/api/articles")

    return (
        
        <Router>
        <h1>ScotNews</h1>
        <>
        <NavBar/>
        <Switch>
          <Route path="/articles" component={ArticleContainer} />
        </Switch>
        </>
        </Router>

    

    )


}

export default MainContainer;