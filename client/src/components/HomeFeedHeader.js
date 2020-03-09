import React from 'react'
import Post from './FeedPost'

const FeedHeader = (props) => {

   return (
      <div className="feedHeader d-flex">
         <Post cName="main-block" title={props.pSlice[0].title} piclink={props.pSlice[0].piclink} game={props.pSlice[0].game} date={props.pSlice[0].date}></Post>
         <div className="d-flex flex-column sub-main-block">
            <Post cName="sub-main-new" 
               title={props.pSlice[1].title} 
               piclink={props.pSlice[1].piclink} 
               game={props.pSlice[1].game} 
               date={props.pSlice[1].date}>
            </Post>
            <Post cName="sub-main-new" 
               title={props.pSlice[2].title} 
               piclink={props.pSlice[2].piclink} 
               game={props.pSlice[2].game} 
               date={props.pSlice[2].date}>
            </Post>
         </div>
      </div>
   )
}

export default FeedHeader
