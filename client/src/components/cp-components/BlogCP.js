import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/httphook";
import BlogPart from "./BlogPart";

const BlogCP = () => {
   const { request } = useHttp();

   const [form, setForm] = useState({
      title: "",
      game: "Dota 2",
      author: "",
      avatar: ""
   });

   const [validation, setValidation] = useState({
      message: "",
      color: ""
   })

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
   
   const removePart = (index) => {
      setSections(sections => ({
         sectionsData: [...sections.sectionsData.filter(item => (item._id !== index))]
      }))
   }

   const addBlog = async () => {
      if(sections.sectionsData.length < 0){
         setValidation({
            message: "Добавьте хотя бы 1 секцию",
            color: "red"
         })
      }else{
         let errors = sections.sectionsData.filter((item) => {
            if (item.title.length === 0 || item.content.length === 0){
               return item;
            }
         })
         if(errors.length === 0) {
            setValidation({
               message: "Блог создан",
               color: "lime"
            })
            try {
               const req = await request("/api/add-blog", "POST", {
                  ...form,
                  sections: sections.sectionsData
               });
               console.log(req);
               
            } catch (e) {}
         }else{
            setValidation({
               message: "Заполните все поля (Sub title и content)",
               color: "red"
            })
         }
      }
   };

   const dropData = async () => {
      try {
          await request("/api/remove-blogs")
      } catch (error) {
          
      }
  };

  useEffect(() => {
   console.log(sections);
   
  }, [sections, setSections])
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
            <p style={{color: validation.color}}>{validation.message}</p>
            <div className="d-flex justify-content-between">
               <button onClick={addPart}>ADD SECTION</button>
               <button onClick={addBlog}>CREATE BLOG</button>
            </div>

            <div>
               {sections.sectionsData.map((item, i) => (
                  <BlogPart
                     key={i}
                     {...item}
                     handler={sectionChangeHandler}
                     remove={removePart}
                  />
               ))}
            </div>
         </div>
         <div className="manual col-md-6 col-12 d-flex flex-column justify-content-between">
            <div>
               <h3>Manual</h3>
               <p>- Main title, Author, Avatar link - обязательные поля.</p>
               <p>- Выпадающее меню по умолчанию устанавливает игру Dota 2.</p>
               <p>- НЕ ЗАБЫВАТЬ устанавливать правильную игру.</p>
               <p>- ADD SECTION добалвяет раздел блога</p>
               <p>- Поле picklink в каждом разделе не обязательно для заполнения</p>
               <p>- ADD SECTION - добавить блог</p>
               <p>- Кнопка DROP DATA полностью стирает все записи</p>
            </div>
            <button className="drop-data" onClick={dropData}>DROP DATA</button>
         </div>
      </div>
   );
};

export default BlogCP;
