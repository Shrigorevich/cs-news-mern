import React from "react";
import VideoApi from "./VideoApi"
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
            {props.vidprev ? <VideoApi title={props.title} link={props.vidlink} width="100%" height="400px"/> :
            <img
               className="img-fluid"
               src={props.piclink}
               alt={props.piclink}
            />}
            <div className="post-overview-body" dangerouslySetInnerHTML={{__html: props.content}}>

            </div>
         </div>
      </div>
   );
};

export default PostOverview;
