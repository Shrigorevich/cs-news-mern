import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import PostCP from '../components/PostCP'

export const Create = () => {

    return (
      <div className="create">
         <Router>
            <div className="nav-bar">
                  <Link to="/new-post">Новостной пост</Link>
                  <Link to="/analitics-post">Пост аналитики</Link>
                  <Link to="/tournamnet">Турнир</Link>
            </div>

            <div className="cp-body">
               <Switch>
                  <Route path="/new-post">
                     <PostCP/>
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
    )
}
