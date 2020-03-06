var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'MDF Validator (NTU SCSE)', 
    increment: function() { return 2; },
    process: function() { alert("Do you know da wae"); }
  });
});

function hex2bin(hex){
  return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

router.post('/submitMDF', function (req, res) {
  console.log("submitMDF()");
  console.log(req.body.mdf1);
  console.log(req.body.mdf2);
  var m1 = hex2bin(req.body.mdf1);
  res.send("Done");
});

module.exports = router;
