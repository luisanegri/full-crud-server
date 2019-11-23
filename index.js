const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();
const postRouter = require('./posts/router');
const userRouter = require('./user/router');
const authRouter = require('./auth/router');
app.use(parserMiddleware);
app.use(authRouter);
app.use(postRouter);
app.use(userRouter);

app.listen(port, () => console.log(`this app is running on port ${port}`));
