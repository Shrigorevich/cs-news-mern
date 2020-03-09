const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
   _id: {type: Number, required: true},
   title: {type: String, required: true},
   description: {type: String, required: true},
   piclink: {type: String, required: true}
})

module.exports = model('Gpreview', schema)
