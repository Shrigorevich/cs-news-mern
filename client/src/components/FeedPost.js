import React from 'react'
//{props.content ? <p>{props.content}</p> : <p>{props.preview}</p>}
export const Post = (props) => {

   const image = require(`../images/${props.piclink}`)

   const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0,0,0, 0.9)), url(${image})`,
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }
   return (
      <div className={props.cName}>
         <div className="p-3 post" style={divStyle}>
            <div className="details">
               <h4>{props.title}</h4>
               <div className="date-game">
                  <span>{props.game}</span>
                  <span>{new Date(props.date).toLocaleDateString()}</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Post
