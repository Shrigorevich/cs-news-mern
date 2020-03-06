const {Schema, model} = require('mongoose');

const schema = new Schema({
    _id:{type: String, required: true},
    sequence_value:{type: Number, required: true}

})

module.exports = model('Counter', schema)
