import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Calendar} from './pages/calendar'
import {Home} from './pages/home'
import {Create} from './pages/create'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/calendar" exact>
                <Calendar/>
            </Route>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/create" exact>
                <Create/>
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
