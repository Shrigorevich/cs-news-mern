import React, {useEffect, useState} from 'react'
import Blog from './Blog'
import {useHttp} from '../hooks/httphook'

export const BlogList = () => {
   const {request} = useHttp()
   const [state, setState] = useState({
      blogs: []
   })

   useEffect(() => {
      async function getData(){
         try {
            const data = await request('/api/blogs', 'GET')
            
            setState({blogs: data.data})
         } catch(e) {}
      }
      getData()
   }, [request])
   
   return (
      <div className="blog-list">
          {state.blogs.map((item, i) => (<Blog key={i} {...item}/>))}
      </div>
   )
}

export default BlogList
