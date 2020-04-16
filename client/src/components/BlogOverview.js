import React from 'react'
import BlogSection from './BlogSection'

export const BlogOverview = (props) => {

   console.log(props);

   const date = new Date(props.date);
   
   const divStyle = {
      backgroundImage: `url(${props.avatar})`,
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
                     <h6>{props.author}</h6>
                     <span className="date">{date.toLocaleDateString()}, {date.getHours()}:{date.getMinutes()}</span>
                  </div>
               </div>
            </div>
            <div className="blog-overview-body" dangerouslySetInnerHTML={{__html: props.content}}>
               
            </div>
         </div>
      </div>
   )
}

export default BlogOverview