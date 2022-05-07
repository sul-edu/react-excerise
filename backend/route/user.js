const router = require('express').Router();

let user = require('../model/userModel');

//get all user
router.get('/', (req,res) => {
    user.find()
    .then(res => res.status(200).json(user))
    .catch(e => {
        console.error(e.message)
    })
})

//create user
router.post('/add', (req,res) => {
    const username = req.body.username;
    const newUser = new username;
    newUser.save()
    .then(res => res.json("user added"))
    .catch(error => {console.error(error.message)});
})

//get user by id
router.get('/:id', (req,res) => {
    user.findById(req.params.id)
    .then(res => res.json(excerise))
    .catch(error => {console.error(error.message)})

})

//update user by id
router.post('/update/:id', (req, res) => {
    user.findById(req.params.id)
    .then(user => {
        user.username = req.body.username,
        user.description = req.body.description,
        user.duration = number(req.body.duration),
        user.date = Date.parse(req.body,date)
    });
    user.save()
    .then(res => res.json('user: added and updated!'))
    .catch(error =>{console.error(error.message)});
})

//delete user

router.delete('/:id', (req,res)=> {
    user.findByIdAndDelete(req.params.id)
    .then(res => res.json('user deleted'))
    .catch(error =>{console.error(error.message)})


})



module.exports = router;