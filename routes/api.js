const {Router} = require('express');
const router = Router()
const Post = require('../models/Post.js');
const Counter = require('../models/Counter.js');
const Prev = require('../models/GPreview.js')
const Tournament = require('../models/Tournament')
const Blog = require('../models/Blog')

async function getNextSequenceValue(sequenceName){

  let filter = {_id: sequenceName }
  let update = {$inc:{sequence_value:1}}

  let sequenceDocument = await Counter.findOneAndUpdate(filter, update, {new:true});
  console.log(sequenceDocument);

  return await sequenceDocument.sequence_value;
}

// PREVIEWS API //

router.get('/previews', async (req, res) => {
  try {
    const previews = await Prev.find()
    res.status(201).json({data: previews})
  } catch (e) {
    console.log('something wrong');
    
  }
})

// PREVIEWS API //

// POSTS API //
router.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find().sort({_id: -1})
      res.status(201).json({message: 'Data received', data: posts})
    } catch (e) {
      res.status(500).json({message: e})
    }
})

router.post('/posts', async (req, res) => {
    try {
      let id = await getNextSequenceValue("postid")
      console.log(id);
      
      const {title, content, piclink, game} = req.body
      const post = new Post({_id: id, title, content, game, piclink})
      console.log('kek');
      
      await post.save()

      res.status(201).json({message: 'Post created'})
    } catch (e) {
      console.log(e);
      res.status(500).json(e)
    }
})


router.post('/post-edit', async (req, res) => {
  try {
    
    const {title, content, piclink, game, _id} = req.body    
    await Post.updateOne({_id: _id}, {title, content, piclink, game})

  } catch (e) { }
})

router.post('/post-del', async (req, res) => {
  try {
    
    const {_id} = req.body 
    await Post.deleteOne({_id: _id})   

  } catch (e) { }
})

router.get('/remove-posts', async (req, res) => {
  await Post.remove()
  res.status(201).json({message: 'Data dropped'})
})

router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findOne({_id: req.params.id})
    res.status(201).json({message: 'Data received', data: post})
  } catch (e) {
    res.status(500).json({message: e})
  }
})


// POSTS API //

// TOURNAMENTS API //

router.get('/tournaments', async (req, res) => {
  try {
    const tPast = await Tournament.find({status: "past"})
    const tActive = await Tournament.find({status: "active"})
    const tFuture = await Tournament.find({status: "future"})
    res.status(201).json({tPast, tActive, tFuture})
  } catch (e) {}
})

router.post('/tournament', async (req, res) => {
  try {
    let id = await getNextSequenceValue("tournamentid")

    const {title, datestart, datefinish, game, prize, status} = req.body 
    const tournament = new Tournament({_id: id, title, datestart: Date.parse(datestart), datefinish: Date.parse(datefinish), game, prize, status})
  
    await tournament.save()
    res.status(201).json({message: 'Post created'})
  } catch (e) {
    console.log(e);
    res.status(500).json(e)
  }
})

router.get('/remove-tournaments', async (req, res) => {
  await Tournament.remove()
})

router.get('/update-tournaments', async (req, res) => {
  await Tournament.updateMany({datefinish: {$lt : Date.now()}}, {status: "past"})
  await Tournament.updateMany({datestart: {$gt : Date.now()}}, {status: "future"})
})

// TOURNAMENTS API //

// BLOGS API //

router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({_id: -1})
    res.status(201).json({message: 'Data received', data: blogs})
  } catch (e) {
    res.status(500).json({message: e})
  }
})

router.post('/add-blog', async (req, res) => {
  try {
    const {title, author, avatar, game, sections} = req.body 
    
    let id = await getNextSequenceValue("blogid")
    
    const blog = new Blog({_id: id, title, author, avatar, game, sections: sections})
    await blog.save()

    res.status(201).json({message: 'Blog created'})
  } catch (e) {
    console.log(e);
  }
})

router.get('/remove-blogs', async (req, res) => {
  await Blog.remove()
})

router.get('/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findOne({_id: req.params.id})
    res.status(201).json({message: 'Data received', data: blog})
  } catch (e) {
    res.status(500).json({message: e})
  }
})

// BLOGS API //

// GAME OVERVIEW API //

router.get('/game/:id', async (req, res) => {
  try {
    const game = req.params.id.replace(/-/g, ' ')

    const blogs = await Blog.find({game: game})
    const posts = await Post.find({game: game})
    const tournaments = await Tournament.find({game: game, status: "active"})
    const preview = await Prev.findOne({title: game})

    res.status(201).json({message: 'Data received', gameData: {blogs, posts, tournaments, preview}})
  } catch (e) {
    res.status(500).json({message: e})
  }
})

// GAME OVERVIEW API //





module.exports = router

// async function addPrev(){
//   const prev = new Prev({_id: 0, 
//     title: "Dota 2",
//     description: "Одна из ключевых игр жанра MOBA в киберспорте и ключевая — на территории СНГ. Именно с Dota 2 началась современная история киберспорта.",
//     piclink: "https://i.imgur.com/CnrfTwA.jpg"
//   })
   
//   await prev.save()

//   const prev1 = new Prev({_id: 1, 
//     title: "CS GO",
//     description: "Counter-Strike: Global Offensive — это продолжение легендарной серии шутеров, стоявшей у истоков киберспорта. Сегодня это главная дисциплина в своем жанре.",
//     piclink: "https://i.imgur.com/qWqX52J.jpg"
//   })
   
//   await prev1.save()

//   const prev2 = new Prev({_id: 2, 
//     title: "League of Legends",
//     description: "League of Legends — прямой конкурент Dota 2, наиболее популярный в Азии. Игру создали один из разработчиков оригинальной DotA и администратор центрального сайта о «Доте», после чего между фанатами двух MOBA развязалась война.",
//     piclink: "https://i.imgur.com/94fXwL7.jpg"
//   })
   
//   await prev2.save()
// }

