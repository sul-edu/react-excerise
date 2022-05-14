const router = require('express').Router();

const { find } = require('../model/userModel');
const user = require('../model/userModel');

//get all user
router.get('/',  async(req,res) => {
try{
    const userInfo = await find();
    res.json(userInfo);
}
catch(err){
    res.json({message: err});
}   
 
});

//create user need body parser to install
router.post('/',(req, res) => {

    const {username} = req.body;
 
    try{
        const savedUser = username.save();
        console.log(savedUser);
        res.json(savedUser);
    }
    catch(e){
        res.json({message:e})
    }
   
   
})

//get user by id
router.get('/:id', (req,res) => {
    user.findById(req.params.id)
    .then(res => res.json(user))
    .catch(error => {console.error(error.message)})

})

// //update user by id
// router.post('/update/:id', (req, res) => {
//     user.findById(req.params.id)
//     .then(user => {
//         user.username = req.body.username,
//         user.description = req.body.description,
//         user.duration = number(req.body.duration),
//         user.date = Date.parse(req.body,date)
//     });
//     user.save()
//     .then(res => res.json('user: added and updated!'))
//     .catch(error =>{console.error(error.message)});
// })

// //delete user

// router.delete('/:id', (req,res)=> {
//     user.findByIdAndDelete(req.params.id)
//     .then(res => res.json('user deleted'))
//     .catch(error =>{console.error(error.message)})


// })



module.exports = router;