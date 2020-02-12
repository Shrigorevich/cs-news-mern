import React from 'react'

export const Post = (props) => {
   return (
      <div className={props.cName}>
         <p>{props.title}</p>
         {props.content ? <p>{props.content}</p> : <p>{props.preview}</p>}
         <p>{props.piclink}</p>
      </div>
   )
}

export default Post
