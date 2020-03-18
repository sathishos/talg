var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/watchInstruments',function(req,res,next){
  console.log(req.body)
  console.count("sathish");
  res.json({status : "received" })
})

module.exports = router;
