const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
   _id: {type: Number, required: true},
   title: {type: String, required: true},
   game: {type: String, required: true},
   datestart: {type: Number, required: true},
   datefinish: {type: Number, required: true},
   prize: {type: String, required: true},
   status: {type: String, required: true}
})

module.exports = model('Tournament', schema)
