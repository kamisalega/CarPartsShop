const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./api/index');

mongoose.connect('mongodb://localhost/carPartsApi'); 
const db = mongoose.connection;

const port = (process.env.PORT || 3000);

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log(`Kamila ${api}`)
app.use(express.static('static'));
app.use(morgan('dev'));
app.use('/api', api);
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   res.json(err);
// });



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function ()  {
  console.log('Connected to MongoDB');

  app.listen(app.get('port'), function ()  {
    console.log(`API Server Listening on port ${app.get('port')}!`);
  });
});

