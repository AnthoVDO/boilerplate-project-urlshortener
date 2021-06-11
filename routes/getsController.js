const express = require("express");
const router = express.Router();
const {PostsModel} = require("../models/postsModel");

router.get("/shorturl/:data", (req, res)=>{
    console.log(req.params.data);

    PostsModel.find({shortedUrl:req.params.data}, (err, url)=>{
        if(url.length === 0) return res.sendFile(process.cwd() + '/views/wrongUrl.html');
        if(err) return console.log(err)
        else {
            return res.redirect(url[0].initialUrl);
        }
    })
})


module.exports = router ;