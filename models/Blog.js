const {Schema, model, Types} = require('mongoose');

const schema1 = new Schema({
   _id: {type: Number, required: true},
   title: {type: String, required: true},
   content: {type: String, required: true},
   piclink: {type: String, required: false}
})


const schema = new Schema({
   _id: {type: Number, required: true},
   title: {type: String, required: true},
   author: {type: String, required: true},
   avatar: {type: String, required: true},
   game: {type: String, required: true},
   date: {type: Date, default: Date.now},
   sections: [schema1]
})

module.exports = model('Blog', schema)

