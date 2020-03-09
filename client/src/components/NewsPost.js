import React from 'react'
//{props.content ? <p>{props.content}</p> : <p>{props.preview}</p>}
export const Post = (props) => {
   const divStyle = {
      backgroundImage: `url(${require('../images/first.jpg')})`,
      height: '200px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }
   return (
      <div className="news-post col-3">
         <div style={divStyle} className="news-post-header"></div>
            <div className="news-post-body">
               <h5>{props.title}</h5>
               <p>{props.game}</p>
            </div>
      </div>
   )
}

export default Post
