const mongoose = require("mongoose");
require('dotenv').config();

const PostModel = mongoose.model(
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

module.exports = {PostModel};