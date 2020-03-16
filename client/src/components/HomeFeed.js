import React, {useEffect, useState} from 'react'
import FeedHeader from './FeedHeader'
import FeedPattern from './FeedPattern'
import {useHttp} from '../hooks/httphook'

export const NewsFeed = () => {
   const {request} = useHttp()
   const [state, setState] = useState({
      posts: []
   })

   useEffect(() => {
      async function getData(){
         try {
            const data = await request('/api/posts', 'GET')
            setState({posts: data.data})
         } catch(e) {}
      }
      getData()
   }, [request])

   return (
      <div className="newsFeed col-9">
         <div>
            <FeedHeader pSlice={state.posts.slice(0,3)}/>
            <FeedPattern pSlice={state.posts.slice(3,7)}/>
         </div>
      </div>
   )
}

export default NewsFeed
