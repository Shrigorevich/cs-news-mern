import React, {useEffect, useState} from 'react'
import BlogSection from './BlogSection'
import {useHttp} from "../hooks/httphook" 
import NewsListItem from "./NewsListItem"

export const BlogOverview = (props) => {

   const {request} = useHttp()
   const [state, setState] = useState({
      blogs: []
   })

   const date = new Date(props.date);
   
   const divStyle = {
      backgroundImage: `url(${props.avatar})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }

   useEffect(() => {
      async function getData(){
         try {
            const blogs = await request('/api/blogs', 'GET')
            setState({
               blogs: blogs.data
            })
         } catch(e) {}
      }
      getData()
   }, [request])

   

   return (
      <div className="blog-overview-wrapper">
         <div className="home-news-list">
            <div className="news-list-head">
               <h5>Блоги</h5>
            </div>
            {state.blogs.slice(0, 10).map((item, i) => {
               return <NewsListItem key={i} {...item} blank={false}/>
            })}
         </div>
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