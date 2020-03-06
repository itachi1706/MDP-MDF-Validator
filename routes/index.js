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
  return BigInt("0x" + hex).toString(2);
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function reverse2DArr(arr) {
  var reversed = arr.map(function reverse(item) { return Array.isArray(item) && Array.isArray(item[0]) ? item.map(reverse) : item.reverse(); });
  return reversed;
}

function printMapDbg(arr) {
  console.log("=======================================");
  for (var i = 0; i < 15; i++) {
    s = "";
    for (var j = 0; j < 20; j++) {
      s += arr[j][i].toString();
    }
    console.log(s);
  }
  console.log("=======================================");
}

// Thanks to the Android parser
router.post('/submitMDF', function (req, res) {
  console.log("submitMDF()");
  console.log("MDF1:", req.body.mdf1, ", MDF2:", req.body.mdf2);
  var m1 = hex2bin(req.body.mdf1);
  m1 = m1.substring(2, 302);
  console.log("Explored MDF:", m1);

  var exploredLen = replaceAll(m1, "0", "").length;
  var obstaclePad = exploredLen % 4;
  console.log("Explored Length:", exploredLen, ", Obstacle Padding:", obstaclePad);

  var m2s = req.body.mdf2;
  console.log("Obstacle MDF Hex Len:", m2s.length);
  var m2 = hex2bin(req.body.mdf2);
  var mdfHexToBin = m2s.length * 4;
  m2 = "0".repeat(mdfHexToBin - m2.length) + m2;
  console.log("Obstacle MDF:", m2);
  console.log("Obstacle MDF Len:", m2.length);

  console.log("Parsing Explored MDF");
  const MAPCOL = 15;
  const MAPROW = 20;
  var j = 0;
  var exploredMap = new Array(MAPROW).fill(0).map(() => new Array(MAPCOL).fill(0));
  for (var i = 0; i < MAPROW; i++) {
    for (var j = 0; j < MAPCOL; j++) {
      var conv = parseInt(m1.charAt(i * MAPCOL + j));
      exploredMap[j][i] = (conv == 0) ? -1 : 0;
    }
  }
  printMapDbg(exploredMap);

  console.log("Parsing Obstacle MDF");
  var counter = 0;
  for (var i = 0; i < MAPROW; i++) {
    for (var j = 0; j < MAPCOL; j++) {
      var str = m2.charAt(counter);
      if (exploredMap[j][i] == 0) {
        if (str == '1') {
          exploredMap[j][i] = 1;
        }
        counter++;
      }
    }
  }
  printMapDbg(exploredMap);

  // bottom up invert
  exploredMap = reverse2DArr(exploredMap);
  printMapDbg(exploredMap);
  
  console.log(exploredMap.length * exploredMap[0].length);
  var send = "";
  for (var i = 0; i < MAPROW; i++) {
    for (var j = 0; j < MAPCOL; j++) {
      send += exploredMap[j][i] + ",";
    }
  }
  send = send.replace(/(^,)|(,$)/g, "");
  res.send(send);
});

module.exports = router;
