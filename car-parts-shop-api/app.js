const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/carPartsApi', {useNewUrlParser: true, useUnifiedTopology: true});

const partsCarRouter = express.Router();
const port = process.env.PORT || 3000;
const CarPart = require('./models/carPart');


partsCarRouter.route('/carParts')
    .post((req, res) => {
        const carPart = new CarPart(req.body);
    })
    .get((req, res) => {
        console.log(req);
        const query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }

        CarPart.find(query, (err, carParts) => {
                if (err) {
                    console.log('Return err: ' + err);
                    return res.send(err);
                }
                return res.json(carParts);
            }
        );
    });

partsCarRouter.route('/carParts/:carPartId')
    .get((req, res) => {
        CarPart.findById(req.params.carPartId, (err, carPart) => {
                if (err) {
                    console.log('Return err: ' + err);
                    return res.send(err);
                }
                console.log('Return carParts:' + carPart);
                return res.json(carPart);
            }
        );
    });


app.use('/api', partsCarRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
