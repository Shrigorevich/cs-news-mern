import React, {useEffect, useState} from 'react'
import PreviewPost from './PreviewPost'
import {useHttp} from '../hooks/httphook'
import NewsListItem from '../components/NewsListItem'
import BlogListItem from '../components/BlogListItem'

export const NewsFeed = () => {
   const {request} = useHttp()
   const [state, setState] = useState({
      posts: [],
      blogs: []
   })

   useEffect(() => {
      async function getData(){
         try {
            const posts = await request('/api/posts', 'GET')
            const blogs = await request('/api/blogs', 'GET')
            setState({
               posts: posts.data,
               blogs: blogs.data
            })
         } catch(e) {}
      }
      getData()
   }, [request])

   return (
      <div className="home-feed">
         <div className="home-preview-block">
            {state.posts.slice(0, 5).map((item, i) => (<PreviewPost key={i} {...item}/>))}
         </div>
         <div className="home-news-block">
            <div className="home-news-list">
               <div className="news-list-head">
                  <h5>Новости | {new Date(Date.now()).toLocaleDateString()}</h5>
               </div>
               {state.posts.map((item, i) => {
                  if(new Date(Date.now()).getDate() === new Date(item.date).getDate()){
                     return <NewsListItem key={i} {...item}/>
                  }else{
                     return null;
                  }
               })}
            </div>
            <div className="home-blog-list">
               <div className="blog-list-head">
                  <h5>Блоги</h5>
               </div>
               <div className="blog-list-body">
                  {state.blogs.slice(0, 6).map((item, i) => (<BlogListItem key={i} {...item}/>))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default NewsFeed
