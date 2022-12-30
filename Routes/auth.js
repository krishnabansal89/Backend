const express = require('express')
const router = express.Router()
const User = require('../Models/model')
const {body , validationResult} = require('express-validator')
// const { exists } = require('../Models/model')

router.post('/singup',[
    body('name' , 'At least 3 character long').isLength({min:3}),
    body('username','Ente valid Email').isEmail(),
    body('password', 'Should be minimum 5 character long').isLength({min:5}),
],(req,res)=>{
    console.log(req.body)
    const errors = validationResult(req);
    if (errors.isEmpty()){
        const user = User(req.body)
        user.save((err)=>{
            if(err){
                res.status(412).json(err)
            }
            else{
                res.status(200).json(user.id)
                console.log(user.id)
            }
        })
    }
    else{
        console.log(errors.errors)
        res.status(404).json(errors.errors)
    }
})

router.post('/login',[
    body('username').isEmail(),
    body('password').exists()
], async(req,res)=>{
    // console.log(req.body) 
    const errr = validationResult(req)
    if(errr.isEmpty()){
        try{
            const {username , password} = req.body
            console.log(username)
            const user = await User.findOne({username})
            if (!user){
                console.log('No user exists')
                res.json('No user exists')
            }
            if (user && user.password != password){
                console.log('Invalid Credentials')
                res.status(414).json('Invalid Credentials')
            }
            if(user && user.password == password){
                res.json({id:user.id})
            }
            
            // res.send('heel')
        }
        catch(error){
            console.log(error)
        }
    }
    else{
        res.send(errr.array())
    }
    
})
router.get('/name' , async(req,res)=>{
    let id = req.headers.id
    let data = await User.findById(id)
    console.log(data.name)
    res.json(data.name)
})
module.exports = router;
