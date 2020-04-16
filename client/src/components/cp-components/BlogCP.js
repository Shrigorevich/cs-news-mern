import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/httphook";

const BlogCP = () => {
   const { request } = useHttp();

   const [form, setForm] = useState({
      title: "",
      game: "Dota 2",
      author: "",
      avatar: "",
      content: "",
      piclink: "",
      _id: 0
   });


   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value });
   };

   const editBlog = async () => {
      try {
         const data = await request("/api/blog-edit", "POST", { ...form });
         return data;
      } catch (error) {}
   };

   const delBlog = async () => {
      try {
         const data = await request("/api/blog-del", "POST", { ...form });
         return data;
      } catch (error) {}
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

   const loadBlog = async () => {
      try {
         const blog = await request(`/api/blog/${form._id}`, 'GET')            
         setForm({
            title: blog.data.title,
            game: blog.data.game,
            author: blog.data.author,
            avatar: blog.data.avatar,
            content: blog.data.content,
            piclink: blog.data.piclink,
            _id: blog.data._id
         })
      } catch(e) {
         console.log(e);  
      }
}

   return (
      <div className="row">
         <div className="post-creation-panel col-md-6 col-12">
            <h1>Блог</h1>
            <div className="d-flex flex-column">
               <label>Main title</label>
               <input type="text" name="title" onChange={changeHandler} value={form.title} />
            </div>
            <div className="d-flex flex-column">
               <label>Author</label>
               <input type="text" name="author" onChange={changeHandler} value={form.author}/>
            </div>
            <div className="d-flex flex-column">
            <label>Content</label>
            <textarea name="content" type="text" onChange={changeHandler} value={form.content}/>
            </div>
            <div className="d-flex flex-column">
               <label>Pic link</label>
               <input name="piclink" type="text" onChange={changeHandler} value={form.piclink} placeholder="Необязательное поле"/>
            </div>
            <div className="d-flex flex-column piclink">
               <label>Avatar link</label>
               <div className="d-flex justify-content-between">
                  <input
                     className="mb-3"
                     type="text"
                     name="avatar"
                     onChange={changeHandler}
                     value={form.avatar}
                  />
                  <select
                     className="required mb-3"
                     name="game"
                     onChange={changeHandler}
                     value={form.game}
                  >
                     <option value="Dota 2">Dota 2</option>
                     <option value="League of Legends">LoL</option>
                     <option value="CS GO">CS GO</option>
                  </select>
               </div>
            </div>

            <div className="d-flex justify-content-between">
               <div className="d-flex flex-column edit-bar">
                  <div className="d-flex post-load">
                     <span>ID:&nbsp;</span>
                     <input
                        name="_id"
                        className="post-id mb-2 mr-2"
                        type="number"
                        onChange={changeHandler}
                     />
                     <button className="btn btn-secondary mb-2" onClick={loadBlog}>
                        LOAD
                     </button>
                  </div>
                  <div className="d-flex justify-content-between">
                     <button className="btn btn-warning" onClick={editBlog}>
                        EDIT
                     </button>
                     <button className="btn btn-danger" onClick={delBlog}>
                        DEL
                     </button>
                  </div>
               </div>
               <div className="d-flex justify-content-between mb-4">
                  <button onClick={addBlog}>CREATE BLOG</button>
               </div>
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
