let cors = require('cors');
let path = require('path');
let axios = require('axios');
let express = require('express');
let bodyParser = require('body-parser');
let config = require('./config.js');

let app = module.exports = express();

let apiCtrl = require('./controller/apiCtrl.js');
let likeCtrl = require('./controller/likeCtrl.js');
let postToAllCtrl = require('./controller/postToAllCtrl.js');
let replyCtrl = require('./controller/replyCtrl.js');
let shareCtrl = require('./controller/shareCtrl.js');

// **************** Middleware ****************
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

// ****************** Endpoints ***************
app.post('/api/add/:id', replyCtrl.replyApi);

app.post('/api/postall/', postToAllCtrl.postToAllApi);

app.post('api/like/`', likeCtrl.likeApi);

app.post('api/share/', shareCtrl.shareApi);

app.get('/api/get/nuvi', apiCtrl.readApi);

app.get('/api/get/:id', apiCtrl.getIdInfo);

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: './public'});
})

app.listen(config.port, function() { console.log('Server initiated on port', config.port); });
