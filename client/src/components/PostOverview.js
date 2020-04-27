import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/httphook" 
import VideoApi from "./VideoApi"
import NewsListItem from "./NewsListItem"
export const PostOverview = props => {

   const {request} = useHttp()
   const [state, setState] = useState({
      posts: []
   })

   useEffect(() => {
      async function getData(){
         try {
            const posts = await request('/api/posts', 'GET')
            setState({
               posts: posts.data
            })
         } catch(e) {}
      }
      getData()
   }, [request])


   return (
      <div className="post-overview-wrapper">
         <div className="home-news-list">
            <div className="news-list-head">
               <h5>Новости</h5>
            </div>
            {state.posts.slice(0, 10).map((item, i) => {
               return <NewsListItem key={i} {...item} blank={false}/>
            })}
         </div>
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
