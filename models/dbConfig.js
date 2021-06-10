const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)