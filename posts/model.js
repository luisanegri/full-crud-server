const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  title: Sequelize.STRING,
  message: Sequelize.STRING
});

module.exports = Post;
