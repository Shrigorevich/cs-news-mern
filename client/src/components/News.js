import React, {useEffect, useState} from 'react'
import Post from './NewsPost'
import {useHttp} from '../hooks/httphook'

export const News = () => {
   const {request} = useHttp()
   const [state, setState] = useState({
      state: false,
      posts: []
   })

   useEffect(() => {
      async function getData(){
         try {
            const data = await request('/api/posts', 'GET')
            setState({state: true, posts: data.data})
         } catch(e) {}
      }
      getData()
   }, [request])

   return (
      <div className="news-list">
          {state.posts.length > 0 ? state.posts.map((item, i) => (<Post key={i} {...item}/>)) : null}
      </div>
   )
}

export default News
