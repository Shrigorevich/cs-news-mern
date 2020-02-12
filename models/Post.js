const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
   title: {type: String, required: true},
   preview: {type: String, required: false},
   content: {type: String, required: true},
   piclink: {type: String, required: true},
   date: {type: Date, default: Date.now}
})

module.exports = model('Post', schema)
