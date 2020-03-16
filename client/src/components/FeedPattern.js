import React from 'react'
import Post from './FeedPost'

export const FeedPattern = (props) => {

   return (
      <div className="row feedPattern">
         {props.pSlice.map((item, i) => (<Post key={i} cName="col-3 post-wrapper" {...item}/>))}
      </div>
   )
}

export default FeedPattern
