const { Router } = require('express');
const User = require('./model');
const bcrypt = require('bcrypt');

const router = new Router();

router.get('/user', async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.send(user);
  } catch {
    console.log(next);
  }
});

router.post('/user', async (req, res, next) => {
  const { username, password } = req.body;
  if (username === '' || password === '') {
    return res.status(400).send('Entry all inputs');
  }
  console.log({ USER_NAME: username, PASSWORD: password });

  try {
    const newUser = await User.create({
      username,
      password: bcrypt.hashSync(password, 10)
    });
    res.json(newUser);
  } catch {
    console.log(next);
  }
});

module.exports = router;
