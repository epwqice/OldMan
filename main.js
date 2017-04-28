const express = require('express') ;

const app = express();

app.use('/OldManManager', require('./src/server/rest/old-man-manager'));
app.use('/', express.static('./dist'));
app.use('/', express.static('./src/web'));


app.get('/', function(req, res){
  res.redirect('/index.html');
});

if (!app.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
