const router = require('express'). Router();

let excerise = require('../model/exceriseModel');

router.get('/', (req, res) => {
    excerise.find()
    .then(res => res.status(200).json(excerise))
    .catch(error => {console.error(error.message)})
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExcerise = new Excerise ({
        username,
        description,
        duration,
        date
    });

    newExcerise.save()
    .then(res => res.json(newExcerise))
    .catch(error => {console.error(error.message)});

});

module.exports = router;