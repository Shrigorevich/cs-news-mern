import React from 'react'

export const PostOverview = (props) => {
   
   let image;

   try {
      image = require(`../images/${props.piclink}`)
   } catch (error) {
      image = require(`../images/alt.png`)
   }

   return (
      <div className="post-overview-wrapper">
         <div className="post-overview">
            <div className="post-overview-head">
               <div className="title">
                  <h3>{props.title}</h3>
               </div>
               <div className="data">
                  <span>{new Date(props.date).toLocaleDateString()},&nbsp;{new Date(props.date).toLocaleTimeString()}</span>
                  <span>{props.game}</span>
               </div>
            </div>
            <img className="img-fluid" src={image} alt={props.piclink}/>
            <div className="post-overview-body">
               <p>{props.content}</p>
            </div>
         </div>
      </div>
   )
}

export default PostOverview