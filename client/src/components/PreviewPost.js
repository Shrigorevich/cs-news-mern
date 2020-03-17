import React from "react";
import { Link } from "react-router-dom";

export const PreviewPost = props => {
   const date = new Date(props.date);

   const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0,0,0, 0.9)), url(${props.piclink})`,
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
   };
   return (
      <div className="">
         <div className="overview-post-wrapper" style={divStyle}>
            <div className="details">
               <Link target="_blank" to={`/news/post-overview/${props._id}`}><h4>{props.title}</h4></Link>
               <div className="date-game">
                  <div className="d-flex align-items-center">
                     <img
                        className="icon"
                        src={require(`../images/${props.game
                           .split(" ")[0]
                           .toLowerCase()}-icon.png`)}
                        alt="game-icon"
                     />
                     <span>{props.game}</span>
                  </div>
                  <span>{date.toLocaleDateString()}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PreviewPost;
