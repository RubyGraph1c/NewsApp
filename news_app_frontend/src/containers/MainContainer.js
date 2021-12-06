import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import ArticleContainer from './ArticleContainer';

const MainContainer = () => {

    return (
        
        <Router>
        <h1>I am main container</h1>
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