const express = require("express");
const router = express.router();
const ObjectID = require("mongoose").Types.ObjectId; //take object id inside database;

const {PostsModel} = require("../models/postsModel");

router.get("/", (req, res)=>{
    PostsModel.find((err, docs)=>{
        if(!err) res.send(docs);
        else console.log("error to get data :"+err)

    })
})