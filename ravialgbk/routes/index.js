var express = require('express');
var router = express.Router();
var socket = require("../socket.Api");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/watchTapOne',function(req,res,next){
  console.log(req.body)
  socket.sendTabOne(req.body);
  res.json({status : "received" })
})

router.post('/watchTapTwo',function(req,res,next){
  socket.sendTabTwo(req.body);
  res.json({status : "received" })
})

router.post('/watchTapThree',function(req,res,next){
  socket.sendTabThree(req.body);
  res.json({status : "received" })
})

router.post('/watchTapFour',function(req,res,next){
  socket.sendTabFour(req.body);
  res.json({status : "received" })
})

router.post('/watchTapFive',function(req,res,next){
  socket.sendTabFive(req.body);
  res.json({status : "received" })
})

module.exports = router;
