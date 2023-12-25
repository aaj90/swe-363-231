const express = require("express");
const router = express.Router();

router.use(express.static(__dirname))

router.get("/Login", function (req, res) {
  res.sendFile(__dirname + "/Login.html");
});

router.get("/Registration", function (req, res) {
  res.sendFile(__dirname + "/Registration.html");
});

module.exports = router;
