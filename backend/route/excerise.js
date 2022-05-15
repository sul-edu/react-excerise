const router = require('express'). Router();

const {find} = require("../model/exceriseModel")
const excerise = require('../model/exceriseModel');

//get all excerise
router.get('/', async(req, res) => {
  try{
    const exceriseinfo = await excerise.find({});
    res.json(exceriseinfo);
  }
  catch(e){
      res.status(500).json({message:e});
  }  
});

// get excerise by id
router.get('/:id', async(req, res) =>{
    try{
        const exceriseById = req.params.id;
        // console.log(exceriseById);
        const newExcerise = await excerise.findById(exceriseById);
        console.log(newExcerise);
        return res.json(newExcerise);
    }
    catch(e){
        res.json({message:e})
    }
});

//excerise update 
router.put('/:id', async(req, res) =>{
    try{
        const exceriseById = req.params.id;
    const updateExcerise = await excerise.updateOne(
        {
            _id:exceriseById,
            title:req.body.title,
            description:req.body.description,
            duration:req.body.duration
        }
    );
    console.log(updateExcerise);
        return res.json(updateExcerise);
}catch(e){
        res.status(500).json({message:e});
    }
    })

//create an excerise
router.post('/add', async(req, res) => {
    try{
        const {body} = req;       
        console.log(req.body);
        const newExcerise = new excerise (body);
        console.log(newExcerise);
       await newExcerise.save();
       return res.status(200).json({success:true, data:newExcerise})
    }
    catch(e){
        console.error(e);
        return res.status(500).send(e);
    }
   
   
   

});

 //delete exceriseById
 router.delete('/:id', async(req, res) => {
    try{    
     const removeExcerise = await excerise.deleteOne({_id: req.params.id});
     return res.json(removeExcerise);
    }catch(e){
     return res.status(500).send(e);
    }
 })

module.exports = router;