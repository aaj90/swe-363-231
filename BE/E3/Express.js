const express  = require('express');
var app = express();

app.use(express.static(__dirname))


app.get('/', function (req, res) {  
    res.sendFile(__dirname + '/HomePage.html');  
  });  

  app.get('/HomePage', function (req, res) {  
    res.sendFile(__dirname + '/HomePage.html');  
  });  

  app.get('/HomePage-ar', function (req, res) {  
    res.sendFile(__dirname + '/HomePage-ar.html');  
  });  

app.get('/Login', function (req, res) {  
    res.sendFile(__dirname + '/Login.html');  
  });  

  app.get('/Registration', function (req, res) {  
    res.sendFile(__dirname + '/Registration.html');  
  });

  
app.listen(8080, ()=>{
    console.log('server is listening on port 8080')
    
})


