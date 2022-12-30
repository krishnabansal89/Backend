const express = require('express')
const router = express.Router()
const data = require('../Models/data')
const { body , validationResult} = require('express-validator')

router.post('/', async (req,res)=>{
    const user = req.headers.id
    console.log(user)
    if(!user){
        res.status(401).send('No valid id given')
    }
    const maal = await data.find({"user_id":user})
    if(!maal){
        res.status(402).send('No valid user found')
    }
    res.send(maal)
    // console.log(maal ,'maal')   
})
 

router.post('/new',[
    body('item',('put some svalue at least')).exists()
],(req,res)=>{
    console.log('body' , req.body.item)
    const error = validationResult(req)
    if(error.isEmpty()){
        const text  = {
            user_id : req.headers.id,
            item: req.body.item
        }
        console.log(text)
        const a = data(text)
        a.save((err)=>{
            if(!err){
                res.send(text)
                // console.log(text)
            }
            else{
                res.status(404).send('No valid user id')
            }
        })
        
    }
    else{
        console.log(error)
    }
})
router.post('/delete',async(req,res)=>{
    const user_id = req.body.id
    console.log(req.body)
    if (user_id){
        await data.findByIdAndDelete(user_id)
        res.send('succesfully deleted')
        console.log('succesfully deleted')
    }
})
module.exports = router 