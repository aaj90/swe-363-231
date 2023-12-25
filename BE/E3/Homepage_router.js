const express = require("express");
const router = express.Router();

router.use(express.static(__dirname))

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/HomePage.html");
});

router.get("/HomePage", function (req, res) {
  res.sendFile(__dirname + "/HomePage.html");
});

router.get("/HomePage-ar", function (req, res) {
  res.sendFile(__dirname + "/HomePage-ar.html");
});


router.post('/', function (req, res) {
  const email = req.body.email; 
  console.log(`Email: ${email}`);
});

router.post('/HomePage(.html)', function (req, res) {
  const email = req.body.email; 
  console.log(`Email: ${email}`);
});

router.post('/HomePage-ar(.html)', function (req, res) {
  const email = req.body.email; 
  console.log(`Email: ${email}`);
});

module.exports = router;
