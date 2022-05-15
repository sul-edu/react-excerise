const express = require('express');
// const express = require('express'). Router();
const router = express.Router();

const { find } = require('../model/userModel');
const user = require('../model/userModel');

//get all user
router.get('/',  async(req,res) => {
try{
    const userInfo = await  user.find({});
    res.json(userInfo);
}
catch(err){
    res.json({message: err});
}    
});

//get user by id
router.get('/:id', async(req, res)=>{
    try{
        const userById = req.params.id;
        const userId = await user.findById(userById);
        return res.status(200).json(userId);

    }catch(e){
        res.json({message:e});
    }
})

//get user by id and update user
router.put('/:id', async(req, res) => {
    try{
        const userById = req.params.id;
        const userUpdate = await user.updateOne({
             _id:userById ,
             username:req.body.username
        });
        console.log(userUpdate);
        return res.json(userUpdate);
    }catch(e){
        res.status(500).json({message:e})
    }
})
//create user need body parser 
router.post('/add', async(req, res) => {
try{
    const {body} = req;
    console.log(body);
    const userInfo = new user(body);
    console.log(userInfo);
    await userInfo.save();
    return res.status(200).json({success:true,
    data:userInfo
    })
}catch(e){
    console.error(e);
    return res.status(500).send(e);
}
   
   
})

//get user by id
router.get('/:id', (req,res) => {
    user.findById(req.params.id)
    .then(res => res.json(user))
    .catch(error => {console.error(error.message)})

});

// delete user by ID
router.delete('/:id', async(req, res)=>{
    try{
        const id = req.params.id
        const deleteUser = await user.deleteOne({_id:id})
        return res.status(201).json(deleteUser);
    }catch(e){
        return res.status(500).json({message:e})
    }
})




module.exports = router;