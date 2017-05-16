const express = require('express') ;
const path = require('path');

const app = express();

app.use('/OldManManager', require('./src/server/rest/old-man-manager'));
app.use(express.static(path.join(__dirname, 'dist')))


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/src/web', 'index.html'))
});

app.get('/check_in_manager', function(req, res){
  res.sendFile(path.join(__dirname, '/src/web', 'index.html'))
});

app.get('/vip_manager', function(req, res){
  res.sendFile(path.join(__dirname, '/src/web', 'index.html'))
});

if (!app.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
