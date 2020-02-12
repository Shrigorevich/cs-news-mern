import React from 'react'

export const Post = (props) => {
   return (
      <div className="postWrapper">
         <p>{props.title}</p>
         <p>{props.preview}</p>
         <p>{props.piclink}</p>
      </div>
   )
}

export default Post
