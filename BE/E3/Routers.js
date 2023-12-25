const express  = require('express');
var app = express();


const Homepage_router = require('./Homepage_router');
const L_R_router = require('./L_R_router');


app.use('/', Homepage_router);
app.use('/HomePage(.html)', Homepage_router);
app.use('/HomePage-ar(.html)', Homepage_router);
app.use('/Login(.html)', L_R_router);
app.use('/Registration(.html)', L_R_router);



app.listen(8080, ()=>{
    console.log('server is listening on port 8080')
    
})


