import React from "react";
import PreviewPost from "./PreviewPost";
import GamePreview from "./GamePreview";
import NewsListItem from "./NewsListItem";
import BlogListItem from "./BlogListItem";
export const GOverview = props => {
   return (
      <div className="game-overview">
         <div className="d-flex">
            <div className="game-overview-news">
               {props.posts.slice(0, 5).map((item, i) => (
                  <PreviewPost key={i} {...item} />
               ))}
            </div>

            <div className="game-overview-aside">
               <GamePreview {...props.preview} />
               <div className="game-overview-tournaments">
                  <h5>Активные турниры</h5>
                  {props.tournaments.map((item, i) => {
                     return (
                        <div key={i} className="overview-tournaments-one mb-2">
                           <div className="d-flex justify-content-between">
                              <span>{item.title}</span>
                              <span>{item.prize}</span>
                           </div>
                           <span className="date">
                              {new Date(item.datestart).toLocaleDateString()}
                              &nbsp;-&nbsp;
                              {new Date(
                                 item.datefinish
                              ).toLocaleDateString()}
                           </span>
                        </div>
                     );       
                  })}
               </div>
            </div>
         </div>

         <div className="home-news-block">
            <div className="home-news-list">
               <div className="news-list-head">
                  <h5>Новости | {new Date(Date.now()).toLocaleDateString()}</h5>
               </div>
               {props.posts.map((item, i) => (
                  <NewsListItem key={i} {...item} />
               ))}
            </div>
            <div className="home-blog-list">
               <div className="blog-list-head">
                  <h5>Блоги</h5>
               </div>
               <div className="blog-list-body">
                  {props.blogs.slice(0, 6).map((item, i) => (
                     <BlogListItem key={i} {...item} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default GOverview;
