import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import PostCP from '../components/cp-components/PostCP'
import TournamentCP from '../components/cp-components/TournamentCP'
import BlogCP from '../components/cp-components/BlogCP'

export const ControlPanel = () => {

    return (
      <div className="create">
         <Router>
            <div className="nav-bar">
                  <Link to="/control-panel/post-cp">Новостной пост</Link>
                  <Link to="/control-panel/tournament-cp">Турнир</Link>
                  <Link to="/control-panel/blog-cp">Блог</Link>
            </div>

            <div className="cp-body">
               <Switch>
                  <Route path="/control-panel/post-cp">
                     <PostCP/>
                  </Route>
                  <Route path="/control-panel/tournament-cp">
                     <TournamentCP/>
                  </Route>
                  <Route path="/control-panel/blog-cp">
                     <BlogCP/>
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
    )
}
