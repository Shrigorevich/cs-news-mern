import React, {useState} from 'react'
import {useHttp} from '../hooks/httphook'

const PostCP = () => {
   const {request} = useHttp()

   const [form, setForm] = useState({
      title: '', preview: '', content: '', piclink: '', game: 'Dota 2'
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
        <div className="row">
            <div className="post-creation-panel col-md-6 col-12">
                <h1>Новостной пост</h1>
                <div className="d-flex flex-column">
                    <label>Title</label>
                    <input type="text" name="title" onChange={changeHandler}/>
                </div>
                <div className="d-flex flex-column">
                    <label>Content</label>
                    <textarea className="post-content" type="text" name="content" onChange={changeHandler}/>
                </div>
                <div className="d-flex flex-column">
                    <label>Picture name</label>
                    <input type="text" name="piclink" onChange={changeHandler}/>
                </div>
                <div className="d-flex justify-content-between">
                <select className="required" value={form.game} name="game" onChange={changeHandler}>
                    <option value="Dota 2">Dota 2</option>
                    <option value="League of Legends">LoL</option>
                    <option value="CS GO">CS GO</option>
                </select>
                <button onClick={addPost}>add</button>
                </div>
            </div>
            <div className="manual col-md-6 col-12">
                <h3>Manual</h3>
            </div>
        </div>
    )
}

export default PostCP