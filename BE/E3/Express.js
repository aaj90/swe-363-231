const express  = require('express');
var app = express();

app.use(express.static(__dirname))


app.get('/', function (req, res) {  
    res.sendFile(__dirname + '/HomePage.html');  
  });  

  app.get('/HomePage(.html)', function (req, res) {  
    res.sendFile(__dirname + '/HomePage.html');  
  });  

  app.get('/HomePage-ar(.html)', function (req, res) {  
    res.sendFile(__dirname + '/HomePage-ar.html');  
  });  

app.get('/Login(.html)', function (req, res) {  
    res.sendFile(__dirname + '/Login.html');  
  });  

  app.get('/Registration(.html)', function (req, res) {  
    res.sendFile(__dirname + '/Registration.html');  
  });


app.use(express.urlencoded({extended: false}))


app.post('/', function (req, res) {
    const email = req.body.email; 
    console.log(`Email: ${email}`);
});

app.post('/HomePage(.html)', function (req, res) {
    const email = req.body.email; 
    console.log(`Email: ${email}`);
});

app.post('/HomePage-ar(.html)', function (req, res) {
    const email = req.body.email; 
    console.log(`Email: ${email}`);
});
  

app.post('/Login(.html)', function (req, res) {
    const email = req.body.email;
    const password = req.body.password; 
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
});

app.post('/Registration(.html)', function (req, res) {
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

app.listen(8080, ()=>{
    console.log('server is listening on port 8080')
    
})


