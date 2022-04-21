const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    picture: {
        type: String
    }
})

module.exports = mongoose.model("Post", Post); 