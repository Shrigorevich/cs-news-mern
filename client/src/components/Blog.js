import React from 'react'
import {Link} from 'react-router-dom'


export const Blog = (props) => {
   const image = require(`../images/${props.avatar}`)
   
   const divStyle = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }
 
   return (
      <div className="blog-preview-wrapper col-3">
         <div className="blog-preview">
            <div className="blog-preview-head">
               <div style={divStyle} className="avatar"></div>
               <div className="author">
                  <h5>{props.author}</h5>
               </div>
            </div>
            <div className="blog-preview-body">
               <h5>{props.title}</h5>
               <div className="blog-preview-text">
                  <p>{props.sections[0].content}</p>
               </div>
               <div className="blog-preview-data">
                  <div className="d-flex align-items-center">
                     <img
                        className="icon"
                        src={require(`../images/${props.game
                           .split(" ")[0]
                           .toLowerCase()}-icon.png`)}
                        alt="game-icon"
                     />
                     <Link target="_blank" to={`/analitics/blog-overview/${props._id}`}>More <i className="fas fa-angle-right"></i></Link>
                  </div>
                  <div className="">
                     <span>{new Date(props.date).toLocaleDateString()}, </span>
                     <span>{new Date(props.date).toLocaleTimeString()}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog
