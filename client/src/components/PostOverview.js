import React from "react";

export const PostOverview = props => {
   return (
      <div className="post-overview-wrapper">
         <div className="post-overview">
            <div className="post-overview-head">
               <div className="title">
                  <h3>{props.title}</h3>
               </div>
               <div className="data ">
                  <span>{props.game}</span>
                  <span className="date">
                     {new Date(props.date).toLocaleDateString()},&nbsp;
                     {new Date(props.date).toLocaleTimeString()}
                  </span>
               </div>
            </div>
            <img
               className="img-fluid"
               src={props.piclink}
               alt={props.piclink}
            />
            <div className="post-overview-body">
               <p>{props.content}</p>
            </div>
         </div>
      </div>
   );
};

export default PostOverview;
