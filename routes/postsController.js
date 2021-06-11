const express = require("express");
const router = express.Router();
const urlencodedParser = express.urlencoded({extended: false}); //used to get data from post 
const {PostsModel} = require("../models/postsModel");

router.post("/shorturl", urlencodedParser ,(req,res)=>{
    const checkUrl = /(?=https:\/\/)(.+\..+)$/;

    if(req.body.url.match(checkUrl)==null){
        return res.json({error: 'invalid url'});
    }else{
      PostsModel.estimatedDocumentCount((err, number)=>{
    if(err) return err;
    else {
        PostsModel.find({initialUrl:req.body.url}, (err,data)=>{
        if(err) console.log(err)
        else {
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