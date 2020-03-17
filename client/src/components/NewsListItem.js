import React from 'react'
import {Link} from 'react-router-dom'


export const NewsListItem = (props) => {
   
   const date = new Date(props.date)

   return (
      <div className="news-list-item">
         <img
            className="icon"
            src={require(`../images/${props.game
               .split(" ")[0]
               .toLowerCase()}-icon.png`)}
            alt="game-icon"
         />
         <div className="d-flex flex-column">
            <Link target="_blank" to={`/news/post-overview/${props._id}`}><h6>{props.title}</h6></Link>
            <span className="date">{date.toLocaleTimeString()}</span>
         </div>
      </div>
   )
}

export default NewsListItem 
