import React from 'react'
import Post from './Post'
//{props.postsSlice.map((item, i) => (<Post key={i} title={item.title} preview={item.preview} piclink={item.piclink}/>))}
//
export const FeedHeader = (props) => {

   return (
      <div className="feedHeader">
         <Post cName="latest" title={props.pSlice[0].title} piclink={props.pSlice[0].piclink} content={props.pSlice[0].content}></Post>
         <div>
            <Post cName="postWrapper" title={props.pSlice[1].title} piclink={props.pSlice[1].piclink} preview={props.pSlice[1].preview}></Post>
            <Post cName="postWrapper" title={props.pSlice[2].title} piclink={props.pSlice[2].piclink} preview={props.pSlice[2].preview}></Post>
         </div>
      </div>
   )
}

export default FeedHeader
