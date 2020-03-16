import React, { useState } from "react";
import { useHttp } from "../../hooks/httphook";
import BlogPart from "./BlogPart";

const BlogCP = () => {
   const { request } = useHttp();

   const [form, setForm] = useState({
      title: "",
      game: "CS GO",
      author: "",
      avatar: ""
   });

   const [sections, setSections] = useState({
      sectionsData: []
   });

   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value });
   };

   const sectionChangeHandler = (event, id) => {
      const eventName = event.target.name;
      const eventValue = event.target.value;

      setSections(sections => {
         const sectionsData = sections.sectionsData.map((item, i) => {
            if (i === id) {
               return { ...item, [eventName]: eventValue };
            } else {
               return item;
            }
         });

         return {
            sectionsData: sectionsData
         };
      });
   };

   const addPart = () => {
      setSections(sections => ({
         sectionsData: [
            ...sections.sectionsData,
            {
               _id: sections.sectionsData.length,
               title: "",
               content: "",
               piclink: null
            }
         ]
      }));
   };

   const addBlog = async () => {
      try {
         const req = await request("/api/add-blog", "POST", {
            ...form,
            sections: sections.sectionsData
         });
         console.log(req);
      } catch (e) {}
   };

   const dropData = async () => {
      try {
          await request("/api/remove-blogs")
      } catch (error) {
          
      }
  };

//   useEffect(() => {
//    console.log(form);
   
//   }, [form])

   return (
      <div className="row">
         <div className="post-creation-panel col-md-6 col-12">
            <h1>Блог</h1>
            <div className="d-flex flex-column">
               <label>Main title</label>
               <input type="text" name="title" onChange={changeHandler} />
            </div>
            <div className="d-flex flex-column">
               <label>Author</label>
               <input type="text" name="author" onChange={changeHandler} />
            </div>
            <div className="d-flex flex-column piclink">
               <label>Avatar link</label>
               <div className="d-flex justify-content-between">
                  <input
                     className="mb-3"
                     type="text"
                     name="avatar"
                     onChange={changeHandler}
                  />
                  <select
                     className="required mb-3"
                     name="game"
                     onChange={changeHandler}
                  >
                     <option value="Dota 2">Dota 2</option>
                     <option value="League of Legends">LoL</option>
                     <option value="CS GO">CS GO</option>
                  </select>
               </div>
            </div>

            <div className="d-flex justify-content-between">
               <button onClick={addPart}>ADD SECTION</button>
               <button onClick={addBlog}>CREATE BLOG</button>
            </div>

            <div>
               {sections.sectionsData.map((item, i) => (
                  <BlogPart
                     key={i}
                     {...item}
                     id={i}
                     handler={sectionChangeHandler}
                  />
               ))}
            </div>
         </div>
         <div className="manual col-md-6 col-12">
            <h3>Manual</h3>
            <button disabled onClick={dropData}>DROP DATA</button>
         </div>
      </div>
   );
};

export default BlogCP;
