import React from 'react'
import Post from './FeedPost'

const FeedHeader = (props) => {
   console.log(props.pSlice);
   

   return (
      <div className="feedHeader d-flex">
         {props.pSlice.length > 0 ? <Post cName="main-block" {...props.pSlice[0]}/> : null}
         <div className="d-flex flex-column sub-main-block">
            {props.pSlice.length > 1 ? <Post cName="sub-main-new" {...props.pSlice[1]}/> : null}
            {props.pSlice.length > 2 ? <Post cName="sub-main-new" {...props.pSlice[2]}/> : null}
         </div>
      </div>
   )
}

export default FeedHeader
