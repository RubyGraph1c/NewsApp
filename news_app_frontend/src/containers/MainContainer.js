import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';

const MainContainer = () => {

    return (
        
        <Router>
        <h1>ScotNews</h1>
        <>
        <NavBar/>
        <Switch>
          <Route path="/articles" component={ArticleContainer}/>
          <Route path="/journalists" component={JournalistContainer}/>

        </Switch>
        </>
        </Router>

    

    )


}

export default MainContainer;