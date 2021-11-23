const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/game-stoop'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/game-stoop/index.html'));});
app.listen(process.env.PORT || 8080);