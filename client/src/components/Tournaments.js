import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'
import {useHttp} from '../hooks/httphook'
import TournamentsTable from './TournamentsTable'

export const Tournaments = (props) => {

    const {request} = useHttp()

    const [state, setState] = useState({
        tPast: [],
        tActive: [],
        tFuture: []
    })

    useEffect(() => {
        async function getData(){
            try {
               const data = await request('/api/tournaments', 'GET')             
               setState({
                   tPast: data.tPast,
                   tActive: data.tActive,
                   tFuture: data.tFuture
               })
            } catch(e) {}
         }
         getData()
    }, [request])

    return (
       <Router>
           <div className="tournaments">
                <div className="ttable-menu">
                    <NavLink to="/calendar/tournaments-past" activeClassName="active-link" className="t-link1">PAST</NavLink>
                    <NavLink to="/calendar/tournaments-active" activeClassName="active-link" className="t-link2">ACTIVE</NavLink>
                    <NavLink to="/calendar/tournaments-future" activeClassName="active-link" className="t-link3">FUTURE</NavLink>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Tournament</th>
                            <th>Start</th>
                            <th>Final</th>
                            <th>Prize</th>
                            <th>Game</th>
                        </tr>
                    </thead>
                    <Switch>
                        <Route path="/calendar/tournaments-past">
                            <TournamentsTable tournaments={state.tPast}/>
                        </Route>
                        <Route path="/calendar/tournaments-active">
                            <TournamentsTable tournaments={state.tActive}/>
                        </Route>
                        <Route path="/calendar/tournaments-future">
                            <TournamentsTable tournaments={state.tFuture}/>
                        </Route>
                    </Switch>
                </table>
            </div>
       </Router>
    )
 }
 
 export default Tournaments
 