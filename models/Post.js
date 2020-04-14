const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
   _id: {type: Number, required: true},
   title: {type: String, required: true},
   content: {type: String, required: true},
   piclink: {type: String, required: false},
   vidlink: {type: String, required: false},
   vidprev:{type: Boolean, required: true},
   game: {type: String, required: true},
   date: {type: Date, default: Date.now}
})

module.exports = model('Post', schema)
