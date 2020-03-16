import React from 'react'
import TournamentRow from './TournamentRow'

export const TournamentsTable = (props) => {

    return (
        <tbody>
            {props.tournaments.map((item, i) => (
                <TournamentRow
                key={i}
                {...item}
                />
            ))}
        </tbody>
    )
 }
 
 export default TournamentsTable
 