require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");
const getsRoutes = require("./routes/getsController");


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use("/api", postsRoutes);
app.use("/api", getsRoutes);

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
