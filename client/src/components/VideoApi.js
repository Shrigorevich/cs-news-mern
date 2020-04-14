import React from "react";

export const VideoApi = props => {
   console.log(props);
   
   return (
      <iframe title={props.title} style={{width: props.width, height: props.height}} src={`https://www.youtube.com/embed/${props.link}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   )
};

export default VideoApi;
