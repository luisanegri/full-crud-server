const { Router } = require('express');
const Post = require('./model');
const router = new Router();

router.post('/post', (req, res, next) => {
  Post.create(req.body)
    .then(post => res.send(post))
    .catch(error => next(error));
});

router.get('/post', (req, res, next) => {
  Post.findAll()
    .then(post => res.send(post))
    .catch(error => next(error));
});

router.get('/post/:id', (req, res, next) => {
  Post.findByPk(req.params.id)
    .then(post => {
      if (!post) {
        res.status(404).end();
      } else {
        res.status(201).json(post);
      }
    })
    .catch(error => next(error));
});

router.put('/post/:id', (req, res, next) => {
  Post.findByPk(req.params.id)
    .then(post => post.update(req.body))
    .then(post => res.send(post))
    .catch(error => next(error));
});

router.delete('/post/:id', (req, res, next) => {
  // pass the event id to where object
  Post.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(error => next(error));
});

module.exports = router;
