import React, { useState } from "react";
import { useHttp } from "../../hooks/httphook";

const PostCP = () => {
   const { request } = useHttp();

   const [form, setForm] = useState({
      title: "",
      preview: "",
      content: "",
      piclink: "",
      game: "Dota 2",
      _id: 0
   });

   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value });
   };

   const addPost = async () => {
      try {
         const data = await request("/api/posts", "POST", { ...form });
         console.log(data);
      } catch (e) {}
   };

   const editPost = async () => {
      try {
         console.log(form);

         const data = await request("/api/post-edit", "POST", { ...form });
         return data;
      } catch (error) {}
   };

   const delPost = async () => {
      try {
         const data = await request("/api/post-del", "POST", { ...form });
         return data;
      } catch (error) {}
   };

   const dropData = async () => {
      try {
         let req = await request("/api/remove-posts");
         return req;
      } catch (error) {}
   };

   return (
      <div>
         <div className="row">
            <div className="post-creation-panel col-md-6 col-12">
               <h1>Новостной пост</h1>
               <div className="d-flex flex-column">
                  <label>Title</label>
                  <input type="text" name="title" onChange={changeHandler} />
               </div>
               <div className="d-flex flex-column">
                  <label>Content</label>
                  <textarea
                     className="post-content"
                     type="text"
                     name="content"
                     onChange={changeHandler}
                  />
               </div>
               <div className="d-flex flex-column piclink">
                  <label>Picture name</label>
                  <div className="d-flex justify-content-between">
                     <input
                        className="mb-3"
                        type="text"
                        name="piclink"
                        onChange={changeHandler}
                     />
                     <select
                        className="required mb-3"
                        value={form.game}
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
                  <div className="d-flex flex-column edit-bar">
                     <div className="d-flex">
                        <span>ID:&nbsp;</span>
                        <input
                           name="_id"
                           className="post-id mb-2"
                           type="number"
                           onChange={changeHandler}
                        />
                     </div>
                     <div className="d-flex justify-content-between">
                        <button className="btn btn-warning" onClick={editPost}>
                           EDIT
                        </button>
                        <button className="btn btn-danger" onClick={delPost}>
                           DEL
                        </button>
                     </div>
                  </div>
                  <div>
                     <button
                        className="btn btn-success w-100"
                        onClick={addPost}
                     >
                        ADD
                     </button>
                  </div>
               </div>
            </div>
            <div className="manual col-md-6 col-12 d-flex flex-column justify-content-between">
               <div>
                  <h3>Manual</h3>
                  <p>- Title, content, picture link - обязательные поля.</p>
                  <p>- Выпадающее меню по умолчанию устанавливает игру Dota 2.</p>
                  <p>- НЕ ЗАБЫВАТЬ устанавливать правильную игру.</p>
                  <p>- Для того что бы отредактировать пост, нужно обязательно заполнить все поля заново. В поле ID ввести номер поста и нажать EDIT</p>
                  <p>- Для удаления просто досточно только ввести номер поста в поле ID и нажать кнопку DEL</p>
                  <p>- Кнопка DROP DATA полностью стирает все записи</p>
               </div>
               <button className="drop-data" onClick={dropData}>DROP DATA</button>
            </div>
         </div>
      </div>
   );
};

export default PostCP;
