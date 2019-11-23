const express = require('express');
const app = express();
const port = 4000;
const postRouter = require('./posts/router');
// const db = require('./db')

app.listen(port, () => console.log(`this app is running on port ${port}`));
