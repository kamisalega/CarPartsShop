const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./api/index');

mongoose.connect('mongodb://localhost/carPartsApi');
const db = mongoose.connection;

const port = (process.env.PORT || 3000);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use(morgan('dev'));
app.use('/api', api);
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   res.json(err);
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  app.listen(app.get('port'), () => {
    console.log(`API Server Listening on port ${app.get('port')}!`);
  });
});
