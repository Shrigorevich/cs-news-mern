const {Router} = require('express');
const router = Router()
const Post = require('../models/Post.js');

//api/auth/register

router.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find()
      res.status(201).json({message: 'Data received', data: posts})
    } catch (e) {
      res.status(500).json({message: e})
    }
})

router.post('/posts', async (req, res) => {
    console.log({method: "post", link: '/home'});
    try {
      const {title, preview, content, piclink} = req.body
      const post = new Post({title, preview, content, piclink})

      await post.save()

      res.status(201).json({message: 'Post created'})
    } catch (e) {
      console.log(e);
      res.status(500).json(e)
    }
})

module.exports = router
