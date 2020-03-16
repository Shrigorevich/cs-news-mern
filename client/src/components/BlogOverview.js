import React from 'react'
import BlogSection from './BlogSection'

export const BlogOverview = (props) => {

   console.log(props);

   const date = new Date(props.date);
   const image = require(`../images/${props.avatar}`)
   
   const divStyle = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }

   // <span>{new Date(props.date).toLocaleDateString()},&nbsp;{new Date(props.date).toLocaleTimeString()}</span>
   // <span>{props.game}</span>

   return (
      <div className="blog-overview-wrapper">
         <div className="blog-overview">
            <div className="blog-overview-head">
               <h2>{props.title}</h2>
               <div className="d-flex align-items-center author">
                  <div style={divStyle} className="avatar"></div>
                  <div>
                     <h6>{props.author} Shcherbyna</h6>
                     <span>{date.toLocaleDateString()}, {date.getHours()}:{date.getMinutes()}</span>
                  </div>
               </div>
            </div>
            <div className="blog-overview-body">
               {props.sections.map((item, i) => (<BlogSection key={i} {...item}/>))}
            </div>
         </div>
      </div>
   )
}

export default BlogOverview