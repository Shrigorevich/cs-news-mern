import React from 'react'
import Post from './Post'
export const FeedHeader = (props) => {
   return (
      <div className="FeedHeader">
         {props.postsSlice.map((item, i) => (<Post key={i} title={item.title} preview={item.preview} piclink={item.piclink}/>))}
      </div>
   )
}

export default FeedHeader
