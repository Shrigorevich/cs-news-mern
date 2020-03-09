import React, {useEffect, useState} from 'react'
import FeedHeader from './HomeFeedHeader'
import FeedPattern from './FeedPattern'
import {useHttp} from '../hooks/httphook'
//{state.state ? state.content.map((item, i) => (<Post title={item.title} preview={item.preview} piclink={item.piclink}/>)) : null}
export const NewsFeed = () => {
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
      <div className="newsFeed col-9">
         <div>
            {state.posts.length === 0 ? null : <FeedHeader pSlice={state.posts.slice(0,3)}/>}
            {state.posts.length === 0 ? null : <FeedPattern pSlice={state.posts.slice(3,7)}/>}
         </div>
      </div>
   )
}

export default NewsFeed
