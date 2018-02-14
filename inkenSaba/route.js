var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res, next) {

  res.json({ "hello": "world"});

});

module.exports = router;

process.env.TZ = 'Asia/Tokyo';
process.on('unhandledRejection', console.dir);