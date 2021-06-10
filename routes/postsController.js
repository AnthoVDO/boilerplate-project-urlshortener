const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ObjectID = require("mongoose").Types.ObjectId; //take object id inside database;
const urlencodedParser = express.urlencoded({extended: false}); //used to get data from post 
const {PostsModel} = require("../models/postsModel");

router.post("/shorturl", urlencodedParser ,(req,res)=>{

    const checkStartUrl = /^(https:\/\/)/;
    //const checkEndUrl = /(\.[.]+)$/;

    if(req.body.url.match(checkStartUrl)==null){
        return res.json({error: 'invalid url'});
    }else{
      PostsModel.estimatedDocumentCount((err, number)=>{
    if(err) return err;
    else {
        PostsModel.find({initialUrl:req.body.url}, (err,data)=>{
        if(err) console.log(err)
        else {
            console.log(data[0])
            if(data.length>0) res.json({original_url: data[0].initialUrl, short_url: data[0].shortedUrl});
            else {
                const newUrl = {initialUrl: req.body.url, shortedUrl: number+1};
                PostsModel.create(newUrl);
                res.json({original_url: req.body.url, short_url:number+1})
            }
        }
    })
    }
});  
    }    
})




module.exports = router ;