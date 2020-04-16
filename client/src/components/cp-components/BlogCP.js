import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/httphook";
import BlogPart from "./BlogPart";

const BlogCP = () => {
   const { request } = useHttp();

   const [form, setForm] = useState({
      title: "",
      game: "Dota 2",
      author: "",
      avatar: "",
      content: "",
      piclink: ""
   });


   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value });
   };

   const addBlog = async () => {
      try {
         const req = await request("/api/add-blog", "POST", {
            ...form
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
            <div className="d-flex flex-column">
            <label>Content</label>
            <textarea name="content" type="text" onChange={changeHandler}/>
            </div>
            <div className="d-flex flex-column">
               <label>Pic link</label>
               <input name="piclink" type="text" onChange={changeHandler} placeholder="Необязательное поле"/>
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
               <button onClick={addBlog}>CREATE BLOG</button>
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
