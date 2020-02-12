import React from 'react'
import Post from './Post'

export const FeedPattern = (props) => {

   return (
      <div className="feedPattern">
         {props.pSlice.map((item, i) => (<Post key={i} cName="postWrapper" title={item.title} preview={item.preview} piclink={item.piclink}/>))}
      </div>
   )
}

export default FeedPattern
