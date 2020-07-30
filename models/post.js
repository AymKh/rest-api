const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'No Title'
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    content: {
        type: String,
        required: true,
        default: 'No content was specified, post will be auto deletedi in 60 sec'
    }
})



module.exports = mongoose.model('Post', postSchema)