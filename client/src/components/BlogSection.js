import React from 'react'
import {Link} from 'react-router-dom'


export const Blog = (props) => {

   let image = null;

   if(props.piclink){
      try {
         image = require(`../images/${props.piclink}`)
      } catch (error) {
         image = null; 
      }
   }
   
   return (
      <div className="blog-section">
         <h4>{props.title}</h4>
         <p>{props.content}</p>
         {image ? <img className="img-fluid" src={image}/> : null}
      </div>
   )
}

export default Blog
