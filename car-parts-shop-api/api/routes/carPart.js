const CarPart = require('../../models/carPart');

module.exports = function (router) {

    router.get('/carParts', function(req, res)  {
        console.log(req);
        const query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }

        CarPart.find(query, (err, carParts) => {
            if (err) {
                console.log(`Return err: ${err}`);
                return res.send(err);
            }
            return res.json(carParts);
        });
    });

    router.get('/carParts/:carPartId', (req, res) => {
        CarPart.findById(req.params.carPartId, (err, carPart) => {
            if (err) {
                console.log(`Return err: ${err}`);
                return res.send(err);
            }
            console.log(`Return carParts:${carPart}`);
            return res.json(carPart);
        });
    });
    router.post('/carParts', function (req, res) {
        let carPart = new CarPart(req.body)
        carPart.save(function (err, transaction) {
            if (err) return console.log(err)
            res.status(200).json(transaction)
        }).then()
    })
}




