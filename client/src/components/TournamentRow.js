import React from 'react'

export const TournamentRow = (props) => {
   return (
    <tr>
        <td>{props.title}</td>
        <td>{new Date(props.datestart).toLocaleDateString()}</td>
        <td>{new Date(props.datefinish).toLocaleDateString()}</td>
        <td>{props.prize}</td>
        <td>{props.game}</td>
    </tr>
   )
}

export default TournamentRow
