import React, {useEffect, useState} from 'react'
import FeedHeader from './FeedHeader'
import FeedPattern from './FeedPattern'
import {useHttp} from '../hooks/httphook'
//{state.state ? state.content.map((item, i) => (<Post title={item.title} preview={item.preview} piclink={item.piclink}/>)) : null}
export const NewsFeed = () => {
   const {loading, request} = useHttp()
   const [state, setState] = useState({
      state: false,
      posts: []
   })

   useEffect(() => {
      async function getData(){
         try {
            const data = await request('/api/posts', 'GET')
            setState({state: true, posts: data.data})
            return data.data
         } catch(e) {}
      }
      getData()
   }, [])

   return (
      <div className="newsFeed">
         {state.posts.length == 0 ? null : <FeedHeader pSlice={state.posts.slice(0,3)}/>}
         {state.posts.length == 0 ? null : <FeedPattern pSlice={state.posts.slice(0,8)}/>}
      </div>
   )
}

export default NewsFeed
