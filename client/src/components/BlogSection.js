import React from 'react'

export const BlogSection = (props) => {
 
   return (
      <div className="blog-section">
         <h4>{props.title}</h4>
         <p>{props.content}</p>
         {props.piclink ? <img className="img-fluid" src={props.piclink} alt={props.piclink}/> : null}
      </div>
   )
}

export default BlogSection
