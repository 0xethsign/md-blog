const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, required: true, default: () => Date.now() },
    markdown: { type: String, required: true },
    headerImage: { data: Buffer, contentType: String }
})

module.exports = Post = mongoose.model("post", postSchema)