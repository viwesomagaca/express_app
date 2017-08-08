var express = require('express');
var app = express();



//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});

var greets = [];
app.get('/greetings/:id', function(req, res){
  var name = req.params.id
 
 greets.push(name);
  res.send("Hello,  " + name);
});

app.get('/greeted', function(req, res){
res.send(greets);
});

app.get('/counter/:id', function(req, res){
var name = req.params.id


function howManyGreets(count){
return count === name;
}

var greetsCounter = greets.filter(howManyGreets).length;

res.send("Hello, " + name + " Has been greeted " + greetsCounter + " time(s).")
})




