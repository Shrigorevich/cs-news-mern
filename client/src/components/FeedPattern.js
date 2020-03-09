import React from 'react'
import Post from './FeedPost'

export const FeedPattern = (props) => {

   return (
      <div className="row feedPattern">
         {props.pSlice.map((item, i) => (<Post key={i} cName="col-3 post-wrapper" game={item.game} date={item.date} title={item.title} piclink={item.piclink}/>))}
      </div>
   )
}

export default FeedPattern
