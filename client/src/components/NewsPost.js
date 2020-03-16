import React from "react";
import { Link } from "react-router-dom";

export const Post = props => {

   let image;
   try {
      image = require(`../images/${props.piclink}`)
   } catch (error) {
      image = require(`../images/alt.png`)
   }

   return (
      <div className="news-post" data-id={props._id}>
         <div className="news-post-head">
            <img className="img-fluid" src={image} alt={props.piclink}/>
         </div>
         <div className="news-post-body">
            <h5>{props.title}</h5>
            <div className="d-flex justify-content-between news-post-data">
               <div className="d-flex align-items-center">
                  <img
                     className="icon"
                     src={require(`../images/${props.game
                        .split(" ")[0]
                        .toLowerCase()}-icon.png`)}
                     alt="game-icon"
                  />
                  <Link target="_blank" to={`/news/post-overview/${props._id}`}>More <i class="fas fa-angle-right"></i></Link>
               </div>
               <p>{new Date(props.date).toLocaleDateString()}</p>
            </div>
         </div>
      </div>
   );
};

export default Post;
