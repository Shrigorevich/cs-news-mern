const {Router} = require('express');
const router = Router()
const Post = require('../models/Post.js');
const Counter = require('../models/Counter.js');

async function getNextSequenceValue(sequenceName){

  let filter = {_id: sequenceName }
  let update = {$inc:{sequence_value:1}}

  let sequenceDocument = await Counter.findOneAndUpdate(filter, update, {new:true});
  console.log(sequenceDocument);

  return await sequenceDocument.sequence_value;
}

async function deletePosts(){
  let result = await Post.remove()
}

router.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find()
      res.status(201).json({message: 'Data received', data: posts})
    } catch (e) {
      res.status(500).json({message: e})
    }
})

router.post('/posts', async (req, res) => {
    try {
      let id = await getNextSequenceValue("postid")
      console.log(id);
      
      const {title, preview, content, piclink, game} = req.body
      const post = new Post({_id: id, title, preview, content, game, piclink})
      console.log('kek');
      
      await post.save()

      res.status(201).json({message: 'Post created'})
    } catch (e) {
      console.log(e);
      res.status(500).json(e)
    }
})

module.exports = router
