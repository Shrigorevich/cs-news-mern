import React, {useState} from 'react'
import {useHttp} from '../hooks/httphook'

export const Create = () => {
   const {loading, request} = useHttp()

   const [form, setForm] = useState({
      title: '', preview: '', content: '', piclink: ''
   })

   const changeHandler = event => {
      setForm({...form, [event.target.name]: event.target.value})
   }

   const addPost = async () => {
      try {
         const data = await request('/api/posts', 'POST', {...form})
         console.log(data);
      } catch (e) {

      }
   }

    return (
      <div className="creationPanel">
         <h1>Create element</h1>
         <div>
            <input className="inputField" type="text" name="title" onChange={changeHandler}/>
         </div>
         <div>
            <textarea className="postPreview" type="text" name="preview" onChange={changeHandler}/>
         </div>
         <div>
            <textarea className="postContent" type="text" name="content" onChange={changeHandler}/>
         </div>
         <div >
            <input className="inputField" type="text" name="piclink" onChange={changeHandler}/>
         </div>
         <button onClick={addPost}>add</button>
      </div>
    )
}
