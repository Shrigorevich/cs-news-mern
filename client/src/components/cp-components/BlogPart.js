import React from "react";

const BlogPart = (props) => {
   const handler = event => {
      props.handler(event, props.id);
   };

   return (
      <div className="blog-part">
         <div className="d-flex flex-column">
            <label>Sub title</label>
            <input name="title" type="text" onChange={handler} />
         </div>
         <div className="d-flex flex-column">
            <label>Content</label>
            <textarea name="content" type="text" onChange={handler}/>
         </div>
         <div className="d-flex flex-column">
            <label>Pic link</label>
            <input name="piclink" type="text" onChange={handler}/>
         </div>
         
      </div>
   );
};

export default BlogPart;
