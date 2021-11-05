const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//app.use();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    // res.sendFile('/ptta ni kya krra hu mai isme/backend/index.html')

    res.render("index",{title :'tms||home'})
})
app.get('/login',function(req,res)
{
    res.render("login",{title :'tms||login'})

})
app.get('/signup',function(req,res)
{
    res.render("signup",{title :'tms||signup'})

})








app.listen(3000,function(){
console.log('Listening to 3000 Now!!');
})