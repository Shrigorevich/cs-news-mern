const {Router} = require('express');
const router = Router()
const Post = require('../models/Post.js');
const Counter = require('../models/Counter.js');
const Prev = require('../models/GPreview.js')

async function getNextSequenceValue(sequenceName){

  let filter = {_id: sequenceName }
  let update = {$inc:{sequence_value:1}}

  let sequenceDocument = await Counter.findOneAndUpdate(filter, update, {new:true});
  console.log(sequenceDocument);

  return await sequenceDocument.sequence_value;
}

// async function addPrev(){
//   const prev = new Prev({_id: 0, 
//     title: "Dota 2",
//     description: "Одна из ключевых игр жанра MOBA в киберспорте и ключевая — на территории СНГ. Именно с Dota 2 началась современная история киберспорта.",
//     piclink: "dota-bg-scale.jpg"
//   })
   
//   await prev.save()

//   const prev1 = new Prev({_id: 1, 
//     title: "CS GO",
//     description: "Counter-Strike: Global Offensive — это продолжение легендарной серии шутеров, стоявшей у истоков киберспорта. Сегодня это главная дисциплина в своем жанре.",
//     piclink: "cs-bg2-scale.jpg"
//   })
   
//   await prev1.save()

//   const prev2 = new Prev({_id: 2, 
//     title: "League of Legends",
//     description: "League of Legends — прямой конкурент Dota 2, наиболее популярный в Азии. Игру создали один из разработчиков оригинальной DotA и администратор центрального сайта о «Доте», после чего между фанатами двух MOBA развязалась война.",
//     piclink: "lol-bg-scale.jpg"
//   })
   
//   await prev2.save()
// }


/*async function deletePosts(){
  let result = await Post.remove()
}*/

router.get('/previews', async (req, res) => {
  try {
    const previews = await Prev.find()
    res.status(201).json({previews: previews})
  } catch (e) {
    console.log('something wrong');
    
  }
})

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

module.exports = router
