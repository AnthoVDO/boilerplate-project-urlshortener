const mongoose = require("mongoose");
require('dotenv').config();

const PostsModel = mongoose.model(
    "urlShortenerFcc",
    {
        initialUrl:{
            type: String,
            require: true
        },
        shortedUrl:{
            type: String,
            reqquire: true
        }
    },
    "posts"
)

module.exports = {PostsModel};