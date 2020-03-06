import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {Calendar} from './pages/calendar'
import {Home} from './pages/home'
import {Create} from './pages/create'
import {News} from './pages/news'

function App() {

   return (
      <Router>
         <Switch>
            <Route path="/" exact>
                <Home/>
            </Route> 

            <Route path="/calendar" exact>
                <Calendar/>
            </Route>
            
            <Route path="/news" exact>
                <News/>
            </Route>

            <Route path="/create" exact>
                <Create/>
            </Route>
            
            <Redirect to="/" />
        </Switch>
      </Router>
   );
}

export default App;
