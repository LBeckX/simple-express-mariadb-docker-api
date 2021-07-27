var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await db.pool.query('SELECT * FROM persons');
  res.send(result);
});

module.exports = router;
