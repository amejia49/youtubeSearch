var express = require('express');
var path = require('path');
var app = express();
var client_key= "AIzaSyDVYOQgodN80xCtC3uU6AHurtLtgSa9Cx0";
var bodyParser = require('body-parser');
var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(client_key);


app.use('/', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 3000));

var router = express.Router();

app.use('/api', router);
router.get('/search',function(req,res){
	console.log(req.query.name);
	youTube.search(req.query.name, 7, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    res.send(JSON.stringify(result, null, 2));
  }
});


})



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});