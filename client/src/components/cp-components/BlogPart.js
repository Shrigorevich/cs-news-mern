import React from "react";

const BlogPart = (props) => {
   const handler = event => {
      props.handler(event, props._id);
   };
   
   return (
      <div className="blog-part">
         <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
               <label>Sub title</label>
               <button className="required mb-1" onClick={() => (props.remove(props._id))}>remove</button>
            </div>
            <input name="title" value={props.title} type="text" onChange={handler} />
         </div>
         <div className="d-flex flex-column">
            <label>Content</label>
            <textarea name="content" value={props.content} type="text" onChange={handler}/>
         </div>
         <div className="d-flex flex-column">
            <label>Pic link</label>
            <input name="piclink" value={props.piclink ? props.piclink : ""} type="text" onChange={handler}/>
         </div>
      </div>
   );
};

export default BlogPart;
