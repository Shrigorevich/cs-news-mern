import React from 'react'
import {Link} from 'react-router-dom'


export const NewsListItem = (props) => {
   
   const date = new Date(props.date)

   const divStyle = props.avatar ? {
      backgroundImage: `url(${props.avatar})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   } : null 

   return (
      <div className="news-list-item">
         {props.avatar ? <div style={divStyle} className="avatar"></div> : 
            <img
            className="icon"
            src={require(`../images/${props.game
               .split(" ")[0]
               .toLowerCase()}-icon.png`)}
            alt="game-icon"
            />
         }
         
         <div className="d-flex flex-column">
            {props.avatar ? <Link target={props.blank ? "_blank" : "_self"} to={`/analitics/blog-overview/${props._id}`}><h6>{props.title}</h6></Link> :
               <Link target={props.blank ? "_blank" : "_self"} to={`/news/post-overview/${props._id}`}><h6>{props.title}</h6></Link>
            }
            <span className="date">{date.toLocaleTimeString()}</span>
         </div>
      </div>
   )
}

export default NewsListItem 
