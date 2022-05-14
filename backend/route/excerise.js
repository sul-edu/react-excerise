const router = require('express'). Router();

let excerise = require('../model/exceriseModel');

router.get('/', (req, res) => {
  try{
    
    res.status(200).json(excerise)
  }
  catch(e){
      console.error(e.message);
  }
  
});

// router.post('/add', (req, res) => {
//     try{
//         const {username, description, duration} = req.body;
//         // const username = req.body.username;
//         // const description = req.body.description;
//         // const duration = req.body.duration;
//         const date = Date.parse(req.body.date);
    
//         const newExcerise = new Excerise ({
//             username,
//             description,
//             duration,
//             date
//         });
    
//         newExcerise.save()
//     }
//     catch(e){
//         console.error(e.message)
//     }
   
   

// });

module.exports = router;