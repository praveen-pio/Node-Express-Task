var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var users = [{
id:101,
name:'car',
cost:500000,
description:'new car'


}];

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('api/users',function(req,res)
{
  return res.json(users);
});

app.post('api/users',function(req,res)
{
  var user = req.body.user;
  users.push(user);
  return res.send('Product added');
});

app.listen('3010',function(){
console.log('server listening to port 3010')

});
