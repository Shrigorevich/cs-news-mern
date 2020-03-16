import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {Calendar} from './pages/calendar'
import {Home} from './pages/home'
import {ControlPanel} from './pages/controlPanel'
import {News} from './pages/news'
import {Analitics} from './pages/analitics'
import {PostOverview} from './pages/postOverview'
import {BlogOverview} from './pages/blogOverview'

function App() {

   return (
      <Router>
         <Switch>
            <Route path="/" exact>
                <Home/>
            </Route> 

            <Route path="/calendar/tournaments-active">
                <Calendar/>
            </Route>
            
            <Route path="/news" exact>
                <News/>
            </Route>

            <Route path="/control-panel">
                <ControlPanel/>
            </Route>

            <Route path="/analitics" exact>
                <Analitics/>
            </Route>

            <Route exact path="/news/post-overview/:id" render={(props) => (<PostOverview {...props}/>)}/>

            <Route exact path="/analitics/blog-overview/:id" render={(props) => (<BlogOverview {...props}/>)}/>

            <Redirect to="/">
                <Home/>
            </Redirect>
        </Switch>
      </Router>
   );
}

export default App;
