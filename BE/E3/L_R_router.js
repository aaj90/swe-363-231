const express = require("express");
const router = express.Router();

router.use(express.static(__dirname))

router.get("/Login", function (req, res) {
  res.sendFile(__dirname + "/Login.html");
});

router.get("/Registration", function (req, res) {
  res.sendFile(__dirname + "/Registration.html");
});

router.post('/Login(.html)', function (req, res) {
  const email = req.body.email;
  const password = req.body.password; 
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
});

router.post('/Registration(.html)', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password1 = req.body.password1; 
  const password2 = req.body.password2; 
  const tel = req.body.tel; 

  console.log(`name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password1}`);
  console.log(`Confirm Password: ${password2}`);
  console.log(`Phone Number: ${tel}`);
});

module.exports = router;
