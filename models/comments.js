const mongoose = require('mongoose')
const Schema = mongoose.Schema()
const commentSchema = new Schema({
    title: String,
    name: String
})

const Comments = mongoose.model('Comments', commentSchema)
module.exports = Comments